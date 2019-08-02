const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    // Add the schema information here.
    name: String,
    description: String
})

var Post = mongoose.model('posts', postSchema);

module.exports = Post;