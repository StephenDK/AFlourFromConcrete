
// require the db model
const db = require('../models/post-model');

module.exports = function(app) {
    // Home route
    app.get('/', function(req, res) {
        res.render("index");
    })
    // Second Page
    app.get('/myevaluation', function(req, res) {
        res.render("myeval");
    })

    // last page
    app.get('/yourturn', function(req, res) {
        // get database querys
       
        res.render("submit");
    })

    app.get('/replies', function(req, res) {
        db.find({})
        .then(function(dbPosts) {
            console.log(dbPosts);
            var hbsObject = {
                data: dbPosts
            }
            res.render('replies', hbsObject);
        })
    })

    // Post route
    app.post('/api/post', function(req, res) {
        console.log(req.body.userText);
        db.create({
            description: req.body.userText
        })
        .then( function(newPost) {
            console.log(newPost);
        })
        .catch(function(err) {
            console.log(err);
        })
       
    })
}