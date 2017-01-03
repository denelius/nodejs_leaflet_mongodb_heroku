var express = require('express');
var app = express();

// Mongoose import
var mongoose = require('mongoose');

// Mongoose connection to MongoDB
mongoose.connect('mongodb://denelius:mlab_pass@ds151008.mlab.com:51008/node_build', function (error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var JsonSchema = new Schema({
    name: String,
    type: Schema.Types.Mixed
});
 
// Mongoose Model definition
var Json = mongoose.model('JString', JsonSchema, 'layer_collection');

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

var path = require ('path');
app.use(express.static(path.join(__dirname + '/public')));

// views is directory for all template files
app.set('views', path.join(__dirname + '/views/pages'));
app.set('view engine', 'pug');
//app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//routes/index.js
/* GET layers json data. */
app.get('/maplayers', function (req, res) {
    Json.find({},{'name': 1}, function (err, docs) {
        res.json(docs);
    });
});

/* GET home page. */
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET json data. */
app.get('/mapjson/:name', function (req, res) {
    if (req.params.name) {
        Json.findOne({ name: req.params.name },{}, function (err, docs) {
            res.json(docs);
        });
    }
});
 
/* GET Map page. */
app.get('/map', function(req,res) {
    var db = req.db;
    Json.find({},{}, function(err,docs){
        res.render('map', {
            "jmap" : docs,
            lat : 40.7848,
            lng : -73.9598
        });
    });
});

module.exports = app;

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});