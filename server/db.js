const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});


db.connect(err => {
  if (err) {
    console.error('❌ Erreur de connexion MySQL:', err);
    return;
  }
  console.log('✅ Connecté à MySQL');
});
db.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
  )
`, (err) => {
  if (err) console.error(err);
  else console.log("✅ Table 'users' prête !");
});

module.exports = db;
