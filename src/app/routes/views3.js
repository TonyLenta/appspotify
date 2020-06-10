const dbConnection = require('../../config/dbConnection');

module.exports = app => {
  const connection = dbConnection();

  app.get('/views3', (req, res) => {
    connection.query('SELECT * FROM view_reporte_cantidad_tarjetas_registradas', (err, result) => {
      res.render('views/views3', {
        views3: result
      });
    });
  });

 
};
