import express from 'express';
import Bin from '../models/bin.js';
import Workspace from '../models/workspace.js';
const router = express.Router();

export const getBins = async (req,res) =>{
    try{
        console.log("running get bins")
        console.log(req.userId)
        let workspaces = await Workspace.find({userId: req.userId})
        workspaces = workspaces = workspaces.map(workspace => workspace._id)
	const bin = await Bin.find({workspaceId: {$in: workspaces}});
	res.status(200).json(bin);
    }catch(err){
	res.status(400).json("error: " + err);
    }
};

export const createBin = async (req,res) => {
    const name = req.body.name;
    const workspaceId = req.body.workspaceId;
    const newBin = new Bin({ name, workspaceId });
    console.log(newBin)
    try {
        await newBin.save();
        let workspace = await Workspace.findById(req.body.workspaceId)
        console.log(workspace)
        workspace.bins.push(newBin._id)
	let message = await workspace.save();
        res.status(201).json(newBin);
    }catch(err){
        res.status(400).json("error: " + err);
    }
};

export const deleteBin = async (req, res) =>{
    try{
	const message = await Bin.findByIdAndDelete(req.params.id);
	res.json('Bin deleted');
    }catch(err){
        res.status(400).json("error: " + err);
    }
};

export const updateBin = async (req, res) =>{
    try{
	bin = await Bin.findById(req.params.id);
	bin.name = req.body.name;
	message =await bin.save();
	res.json('bin updated');
    }catch(err){
	res.status(400).json("error: " + err);
    }
};
