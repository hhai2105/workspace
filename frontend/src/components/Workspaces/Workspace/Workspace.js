import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import {Clear} from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { deleteWorkspace } from '../../../actions/Workspaces.js';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

const Workspace = ({workspace}) => {
	const dispatch = useDispatch();
	return (
		<MenuItem key={workspace._id} >
            <Typography textAlign="center">{workspace.name}</Typography>
			<Button variant="contained" onClick={() => {dispatch(deleteWorkspace(workspace._id))}}>X</Button>
		</MenuItem>
	);
};
export default Workspace;
