import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const binSchema = new Schema({
	name: {type: String, required: true},
	bins: [String]
}, {
	timestamps: false
});

const Bin = mongoose.model('Bin', binSchema);

export default Bin 
