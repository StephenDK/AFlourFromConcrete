
// require the db model
const db = require('../models/post-model');

module.exports = function(app) {
    // Get route


    // Post route
    app.post('/api/post', function(req, res) {
        console.log(req.body);
        
        res.send("Thank you again!!");
    })
}