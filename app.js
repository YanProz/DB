var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');
var bcrypt = require('bcryptjs');
var csrf = require('csurf');


// MODELS

Admin =require('./models/admin');
Pupil =require('./models/pupil');
Event =require('./models/event');
//

index_api = require('./public/routes/index');
cabinet_api = require('./public/routes/cabinet');
add_item_api = require('./public/routes/add-item');
add_event_api = require('./public/routes/add-event');

var app = express();
app.locals.pretty = true;
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/DBManager');

app.use('/', index_api);
app.use('/cabinet', cabinet_api);
app.use('/add-item', add_item_api);
app.use('/add-event', add_event_api);

app.listen(3000);
console.log("listening 3000");