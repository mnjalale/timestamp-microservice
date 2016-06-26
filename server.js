'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js');

var app = express();

app.use('/public',express.static(process.cwd() + '/public'));

routes(app);

var port= process.env.PORT || 8080;
app.listen(port,function(){
        console.log('Listening on port ' + port + '...');
    });
