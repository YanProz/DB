const PORT = 3000;

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

var app = express();
app.locals.pretty = true;
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('localhost:27017/Jared');

app.use(express.static(__dirname + '/public'));
app.use(require('./api'));

app.listen(PORT);
console.log(`listening ${PORT}`);