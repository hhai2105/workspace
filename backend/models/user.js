import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstname = {type: String, required: true},
	lastname = {type: String, required: true},
	email = {type: String, required: true},
	password = {type: String, required: true},
	avatar	= {type: String, required: true},
	workspaces = [String]
}, {
	timestamps: true,
});

const User = mongoose.model('User', noteSchema);
export default User 

