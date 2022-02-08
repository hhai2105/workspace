const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
	title: {type: String, required: true},
}, {
	timestamps: false
});

const Workspace = mongoose.model('Workspace', workspaceSchema);

module.exports = Workspace;
