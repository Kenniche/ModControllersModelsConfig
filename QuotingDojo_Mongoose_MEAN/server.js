// Require the Express Module
const express = require('express');
// Create an Express App
const app = express();
//Require router
const {Route_ii} = require('./server/routes/route_ii');
// Require model/database
require('./server/config/database');

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Connect to router
app.use('/asdf', Route_ii);
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');




// Setting our Server to Listen on Port: 9090
app.listen(9090, function() {
    console.log("listening on port 9090");
})