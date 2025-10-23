// PathMate Back-End Server
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Store accounts in memory
const accounts = [];

// Middleware
app.use(cors());
app.use(express.json());

// CREATE ACCOUNT
app.post('/create-account', (req, res) => {
  const { phoneNumber, username } = req.body;
  accounts.push({ username, phoneNumber });
  console.log('Account created:', { phoneNumber, username });
  console.log('Total accounts:', accounts.length);
  res.json({ success: true });
});

// CHECK ACCOUNT
app.get('/check-account', (req, res) => {
  const { username, phoneNumber } = req.query;
  console.log('Checking account:', { username, phoneNumber });
  
  const exists = accounts.some(
    account => account.username === username && account.phoneNumber === phoneNumber
  );
  
  console.log('Account exists:', exists);
  res.json({ exists });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📱 For React Native, use: http://YOUR_IP_ADDRESS:${PORT}`);
  console.log('\nTo find your IP:');
  console.log('  Mac: System Settings → Network');
  console.log('  Or run: ipconfig getifaddr en0');
});

