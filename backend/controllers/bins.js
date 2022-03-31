import express from 'express';
import Bin from '../models/bin.js';
const router = express.Router();

export const getBins = async (req,res) =>{
	try{
		const bin = await Bin.find();
		res.status(200).json(bin);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const addBins = async (req,res) => {
	const name = req.body.name;
	const newBin = new Bin({ name });
	try {
		await newBin.save();
		res.status(201).json(newBin);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const getBin = async (req, res) =>{
	try{
		const bin = await Bin.findById(req.params.id);
		res.status(200).json(bin);
	}catch(err){
		res.status(400).json("error: " + err);
	}
};

export const deleteBins = async (req, res) =>{
	try{
		const message = await Bin.findByIdAndDelete(req.params.id);
		res.json('Bin deleted');
	}catch(err){res.status(400).json("error: " + err);
			   }
};

export const updateBins = async (req, res) =>{
	try{
		bin = await Bin.findById(req.params.id);
		bin.name = req.body.name;
		message =await bin.save();
		res.json('bin updated');
	}catch(err){
		res.status(400).json("error: " + err);
	}
};
