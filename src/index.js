const app = require('./config/server'); 

require('./app/routes/views')(app); 
require('./app/routes/views2')(app);
require('./app/routes/views3')(app);

// starting the server 
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
