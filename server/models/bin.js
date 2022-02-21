import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const binSchema = new Schema({
	workspace: {type: String}
	name: {type: String, required: true},
}, {
	timestamps: false
});

const Bin = mongoose.model('Bin', binSchema);

export default Bin 
