const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#Sarthak07', 
  database: 'schoolDB'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

module.exports = connection;
