import React  from 'react';
import Workspace from './Workspace/Workspace';
import {getWorkspaces} from '../../actions/Workspaces.js';
import { useSelector } from 'react-redux';
import { Menu, Grid, CircularProgress, Box, Button } from '@mui/material';

const Workspaces = () => {
    const workspaces = useSelector((state) => state.workspaces.workspaces);
    const handleClick = () => {};
    return (
	workspaces.length === 0 ? <CircularProgress /> : (
	    <>
		{workspaces.map((workspace) => (
		    <Workspace key={workspace._id} workspace={workspace}/>
		))}
	    </>
	)
    )
};
export default Workspaces;
