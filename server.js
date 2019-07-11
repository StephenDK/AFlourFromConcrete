// Packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Express instance
const app = express();

// PORT 
const PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
    console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
})