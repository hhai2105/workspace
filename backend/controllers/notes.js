import express from 'express';
import Note from '../models/note.js';
const router = express.Router();

export const getNotes = async (req,res) =>{
	try{
		const note = await Note.find();
		res.status(200).json(note);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const getNote = async (req, res) =>{
	try{
		const note = await Note.findById(req.params.id);
		res.status(200).json(note);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const addNote = async (req,res) => {
	const workspace = req.body.workspace;
	const due = req.body.due;
	const data = req.body.data;
	const file = req.body.file;
	const newNote = new Note({workspace, type, data, file});
	try {
		await newNote.save();
		res.status(201).json(newNote);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};


export const deleteNote = async (req, res) =>{
	try{
		const message = await Note.findByIdAndDelete(req.params.id);
		res.json(req.params.id);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const updateNote = async (req, res) =>{
	try{
		note = await Note.findById(req.params.id);
		note.workspace = req.body.workspace;
		note.due = req.body.due;
		note.data = req.body.data;
		notes.file = req.body.file;
		message =await note.save();
		res.json('post updated');
	}catch(err){
		res.status(400).json("error: " + err);
	}
};
