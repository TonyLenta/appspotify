const dbConnection = require("../../config/dbConnection");

module.exports = (app) => {
  const connection = dbConnection();


app.get("/api-rest/views1", (req, res) => {
  connection.query("SELECT * FROM spofitynew.reporte_canciones_mas_escuchadas", function (
    err,
    rows
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});


app.get("/api-rest/views2", (req, res) => {
  connection.query("SELECT * FROM spofitynew.view_report_Ingresos_User", function (
    err,
    rows
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});



app.get("/api-rest/views3", (req, res) => {
  connection.query("SELECT * FROM spofitynew.view_reporte_cantidad_tarjetas_registradas", function (
    err,
    rows
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});


app.use((req, res) => {
  res.status(404).send({
    success: false,
    data: {
      message: "Estás intentando hacer algo que no deberías",
    },
  });
});

};
