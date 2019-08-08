// Packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Keys = require("./config/keys");

// Require db model
require('./models/post-model');

// Express instance
const app = express();

// PORT 
const PORT = process.env.PORT || 8000;

// Configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var MONGODB_URI = process.env.MONGODB_URI || Keys.dbKey;
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
}, (error, db) => {
    if (error) {
        console.log('Unable to connect to mongodb database. Error: ', error);
    } else {
        console.log('Connection to db successful!!');
    }
})

// routes
require('./routes/post-route')(app);


app.listen(PORT, function() {
    console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
})

