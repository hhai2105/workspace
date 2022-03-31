import express from 'express';
import User from '../models/user.js';
router = express.Router();

export const signUp = async (req,res) => {
	const {firstname, lastname, email ,password, avatar} = req.body;
	const newUser = new User({ firstname, lastname, email, password, avatar });
	try {
		const oldUser = User.findOne({email});
		if (oldUser) return res.status(400).json("email already existed");
		const hashed
		await newUser.save();
		res.status(201).json(newUser);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const signIn = async (req, res) => {
	const {email, password}
	const email = req.body.email;
	const olduser = User.findOne({email})
}

export const deleteUser = async (req, res) =>{
	try{
		const message = await User.findByIdAndDelete(req.params.id);
		res.status(200).json(req.params.id)
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const updateUser = async (req, res) =>{
	try{
		user = await User.findById(req.params.id);
		user.firstname = req.body.firstname;
		user.lastname = req.body.lastname;
		user.email = req.body.email;
		user.password = req.body.password;
		user.avatar = req.body.avatar;
		message =await user.save();
		res.json('user updated');
	}catch(err){
		res.status(400).json("error: " + err);
	}
};
