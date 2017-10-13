var express = require('express');
var bodyParser = require('body-parser');

var Dog = require('./models/dog');
var mongoose = require('mongoose');
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', 3000);

// Connect to MongoDB database via Mongoose library
mongoose.connect('mongodb://siri:426N4thave@ds117485.mlab.com:17485/siri');
var db = mongoose.connection;

// RESTful API
app.get('/', (req, res) => {
	res.send('Please use /api/dogs');
});

// Get beer list
app.get('/api/dogs', (req, res) => {
	Dog.find((err, dogs) => {
		if(err){
			throw err;
		}
		res.json(dogs);
	});
});

// Get one specific beer by id
// UNCOMMENT FUNCTION BELOW ONCE YOU SOLVED GETTING ALL BEERS
app.get('/api/dogs/:_id', (req, res) => {
	Dog.findById(req.params._id, (err, dog) => {
		if(err){
			throw err;
		}
		res.json(dog);
	});
});

// Add new beer to list
// UNCOMMENT FUNCTION BELOW ONCE YOU SOLVED GETTING ONE BEER
app.post('/api/dogs', (req, res) => {
	var newDog = req.body;
	Dog.create(newDog, (err, dog) => {
		if(err){
			throw err;
		}
		res.json(dog);
	});
});

// Update one specific dog
// UNCOMMENT FUNCTION BELOW ONCE YOU SOLVED GETTING ADDING ONE BEER
app.put('/api/dogs/:_id', (req, res) => {
	var query = {_id: req.params._id};
	var updatedDog = req.body;
	Dog.findOneAndUpdate(query, updatedDog, {}, (err, dog) => {
		if(err){
			throw err;
		}
		res.json(dog);
	});
});

// Delete one beer from list
//UNCOMMENT FUNCTION BELOW ONCE YOU SOLVED UPADTING ONE BEER
app.delete('/api/dogs/:_id', (req, res) => {
	var query = {_id: req.params._id};
	
	Dog.remove(query, (err, beer) => {
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

app.listen(app.get('port'), function() {
  console.log('Web Server started on port ' + app.get('port'));
});