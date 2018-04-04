// Require our dependecies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var routes = require("./routes/apiRoutes");
var path = require("path");

// Set up a default port, configure mongoose, configure our middleware
const PORT = process.env.PORT || 3001;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//npm
app.use(express.static("client/build"));

// Add routes, both API and view
app.use("/api", routes);

app.get('*', function(req, res) {
  res.sendFile( path.join(__dirname, './client/build/index.html') );
});

// -------------------------------------------------
// set up database
var db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.Promise = Promise;
mongoose.connect(db, function(error) {
	if (error) {
		console.log(error);
	} else {
		console.log("mongoose connection is sucessful");
	}
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});