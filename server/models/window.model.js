const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
	workspace: {type: String, required: true},
	type: {type: String, required: true},
	note: {type: String, required: true},
	url: {type: String}
	file: {type: String}
	workspace: String
}, {
	timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
