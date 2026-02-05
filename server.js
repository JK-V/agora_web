const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// In-memory store for OTPs: identifier -> { otp, expiresAt }
const otpStore = new Map();

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  // Accept digits, optionally starting with +, length 7-15 digits
  return /^\+?\d{7,15}$/.test(phone);
}

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/request-otp', (req, res) => {
  const { identifier } = req.body || {};
  if (!identifier) return res.status(400).json({ error: 'identifier required' });

  const isEmail = identifier.includes('@');
  if (isEmail) {
    if (!isValidEmail(identifier)) return res.status(400).json({ error: 'invalid email' });
  } else {
    if (!isValidPhone(identifier)) return res.status(400).json({ error: 'invalid phone' });
  }

  const otp = generateOtp();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
  otpStore.set(identifier, { otp, expiresAt });

  // NOTE: For demo only we return the OTP in the response. In production send via SMS/Email.
  return res.json({ success: true, message: 'OTP sent', otp });
});

app.post('/api/verify-otp', (req, res) => {
  const { identifier, otp } = req.body || {};
  if (!identifier || !otp) return res.status(400).json({ error: 'identifier and otp required' });

  // Stub: accept "000000" for testing
  if (otp === '000000') {
    otpStore.delete(identifier);
    return res.json({ success: true, message: 'verified' });
  }

  const record = otpStore.get(identifier);
  if (!record) return res.status(400).json({ error: 'no OTP requested for this identifier' });
  if (Date.now() > record.expiresAt) {
    otpStore.delete(identifier);
    return res.status(400).json({ error: 'OTP expired' });
  }
  if (record.otp !== otp) return res.status(400).json({ error: 'invalid otp' });

  otpStore.delete(identifier);
  return res.json({ success: true, message: 'verified' });
});

app.listen(PORT, () => {
  console.log(`🚀 Agora Trading Platform - Server listening on http://localhost:${PORT}`);
});
