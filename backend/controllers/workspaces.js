import express from 'express';
import Workspace from '../models/workspace.js';
const router = express.Router();

export const getWorkspaces = async (req,res) =>{
	try{
		const workspace = await Workspace.find();
		res.status(200).json(workspace);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const createWorkspace = async (req,res) => {
	const name = req.body.name;
	const newWorkspace = new Workspace({ name });
	try {
		await newWorkspace.save();
		res.status(201).json(newWorkspace);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const getWorkspace = async (req, res) =>{
	try{
		const workspace = await Workspace.findById(req.params.id);
		res.status(200).json(workspace);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const deleteWorkspace = async (req, res) =>{
	try{
		const message = await Workspace.findByIdAndDelete(req.params.id);
		res.status(200).json(req.params.id)
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const updateWorkspace = async (req, res) =>{
	try{
		workspace = await Workspace.findById(req.params.id);
		workspace.name = req.body.name;
		message =await workspace.save();
		res.json('workspace updated');
	}catch(err){
		res.status(400).json("error: " + err);
	}
};
