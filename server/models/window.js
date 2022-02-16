import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const windowSchema = new Schema({
	workspace: {type: String, required: true},
	type: {type: String, required: true},
	data: {type: String },
	file: {type: String },
}, {
	timestamps: true,
});

const Window = mongoose.model('Window', windowSchema);
export default Window

