import express from 'express';
import Window from '../models/window.js';
const router = express.Router();

export const getWindows = async (req,res) =>{
	try{
		const window = await Window.find();
		res.status(200).json(window);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const getWindow = async (req, res) =>{
	try{
		const window = await Window.findById(req.params.id);
		res.status(200).json(window);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const addWindows = async (req,res) => {
	const workspace = req.body.workspace;
	const type = req.body.type;
	const data = req.body.data;
	const file = req.body.file;
	const newWindow = new Window({workspace, type, data, file});
	try {
		await newWindow.save();
		res.status(201).json(newWindow);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};


export const deleteWindows = async (req, res) =>{
	try{
		const message = await Window.findByIdAndDelete(req.params.id);
		res.json(req.params.id);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const updateWindows = async (req, res) =>{
	try{
		window = await Window.findById(req.params.id);
		window.username = req.body.username;
		window.type = req.body.type;
		window.data = req.body.data;
		windows.file = req.body.file;
		message =await window.save();
		res.json('post updated');
	}catch(err){
		res.status(400).json("error: " + err);
	}
};
