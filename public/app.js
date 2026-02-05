(() => {
  const idInput = document.getElementById('identifier');
  const idError = document.getElementById('idError');
  const requestBtn = document.getElementById('requestOtp');
  const step2 = document.getElementById('step2');
  const otpInput = document.getElementById('otp');
  const otpError = document.getElementById('otpError');
  const verifyBtn = document.getElementById('verifyOtp');
  const result = document.getElementById('result');

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhone(phone) {
    return /^\+?\d{7,15}$/.test(phone);
  }

  function showError(el, msg) {
    el.textContent = msg || '';
  }

  requestBtn.addEventListener('click', async () => {
    showError(idError, '');
    result.classList.add('hidden');
    const identifier = idInput.value.trim();
    if (!identifier) return showError(idError, 'Please enter email or mobile');

    const isEmail = identifier.includes('@');
    if (isEmail) {
      if (!isValidEmail(identifier)) return showError(idError, 'Invalid email');
    } else {
      if (!isValidPhone(identifier)) return showError(idError, 'Invalid phone (digits only, optional +)');
    }

    requestBtn.disabled = true;
    try {
      const resp = await fetch('/api/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier })
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error || 'Request failed');

      // For demo we show the OTP in console and allow verification
      console.log('Demo OTP:', data.otp);
      step2.classList.remove('hidden');
      showError(otpError, '');
      idInput.disabled = true;
    } catch (err) {
      showError(idError, err.message || 'Failed');
    } finally {
      requestBtn.disabled = false;
    }
  });

  verifyBtn.addEventListener('click', async () => {
    showError(otpError, '');
    const identifier = idInput.value.trim();
    const otp = otpInput.value.trim();
    if (!otp) return showError(otpError, 'Enter OTP');

    verifyBtn.disabled = true;
    try {
      const resp = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, otp })
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error || 'Verification failed');
      result.textContent = 'Success — verified!';
      result.className = 'success';
      result.classList.remove('hidden');
      step2.classList.add('hidden');
    } catch (err) {
      showError(otpError, err.message || 'Failed');
    } finally {
      verifyBtn.disabled = false;
    }
  });
})();
