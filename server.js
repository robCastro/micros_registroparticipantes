var cors = require('cors')
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3002;
app.use(cors());
app.listen(port);
app.use('/api/registro_participantes', require('./api/routes/routes'));
console.log('todo list RESTful API server started on: ' + port);
