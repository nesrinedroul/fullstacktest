const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('✅ Server is running successfully on Railway!');
});

// Example DB connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err);
  } else {
    console.log('✅ MySQL connecté avec succès !');
  }
});

// ✅ IMPORTANT PART:
const PORT = process.env.PORT || 5000; // <--- use Railway's port if available
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
