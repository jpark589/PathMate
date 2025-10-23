// PathMate Back-End Server
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database');
    // Create users table if it doesn't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        phoneNumber TEXT NOT NULL,
        username TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});

// CREATE ACCOUNT - Save user to database
app.post('/api/users', (req, res) => {
  const { phoneNumber, username } = req.body;
  
  if (!phoneNumber || !username) {
    return res.status(400).json({ error: 'Phone number and username are required' });
  }

  db.run(
    'INSERT INTO users (phoneNumber, username) VALUES (?, ?)',
    [phoneNumber, username],
    function(err) {
      if (err) {
        console.error('Error inserting user:', err.message);
        return res.status(500).json({ error: 'Failed to create account' });
      }
      res.json({ 
        success: true, 
        message: 'Account created!',
        userId: this.lastID 
      });
    }
  );
});

// VERIFY ACCOUNT - Check if username exists
app.get('/api/users/verify/:username', (req, res) => {
  const { username } = req.params;
  
  db.get(
    'SELECT * FROM users WHERE username = ?',
    [username],
    (err, row) => {
      if (err) {
        console.error('Error verifying user:', err.message);
        return res.status(500).json({ error: 'Failed to verify account' });
      }
      
      if (row) {
        res.json({ exists: true, message: 'Account exists' });
      } else {
        res.json({ exists: false, message: 'Account does not exist' });
      }
    }
  );
});

// Get all users (for testing)
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      console.error('Error getting users:', err.message);
      return res.status(500).json({ error: 'Failed to get users' });
    }
    res.json({ users: rows });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📱 For React Native, use: http://YOUR_IP_ADDRESS:${PORT}`);
  console.log('\nTo find your IP:');
  console.log('  Mac: System Settings → Network');
  console.log('  Or run: ipconfig getifaddr en0');
});

