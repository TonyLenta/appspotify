const mysql = require('mysql'); 
module.exports = () => {
  return mysql.createConnection({
    host: 'ip',
    user: 'usuario',
    password: 'pass',
    database: 'nombrebd',
    port: 'numeropuerto'
  });
}
