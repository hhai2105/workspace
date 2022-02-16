import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
	name: {type: String, unique: true, required: true},
}, {
	timestamps: false
});

const Workspace = mongoose.model('Workspace', workspaceSchema);

export default Workspace
