var express = require('express');

var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController')

var port = process.env.port || 3000;

app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

(async () => {
    var mongoUrl = config.getDbConnectionString();
    try{
        await mongoose.connect(mongoUrl, {useNewUrlParser: true, dbName:'node-todo', useUnifiedTopology: true});
        console.log('Mongo connected');
    }catch(e){
        console.error(e);
    }
})() 

setupController(app);
apiController(app);

app.listen(port);