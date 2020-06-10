const dbConnection = require('../../config/dbConnection');

module.exports = app => {
  const connection = dbConnection();

  app.get('/views2', (req, res) => {
    connection.query('SELECT * FROM reporte_canciones_mas_escuchadas', (err, result) => {
      res.render('views/views2', {
        views2: result
      });
    });
  });

 
};
