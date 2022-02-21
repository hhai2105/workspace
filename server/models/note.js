import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const noteSchema = new Schema({
	workspace: {type: String, required: true},
	due: {type: Date},
	note: {type: String },
	file: {type: String },
}, {
	timestamps: true,
});

const Note = mongoose.model('Note', noteSchema);
export default Note

