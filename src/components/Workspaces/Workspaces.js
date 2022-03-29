import React from 'react';
import Workspace from './Workspace/Workspace'
import { useSelector } from 'react-redux';
import { Menu, Grid, CircularProgress, Box, Button } from '@mui/material';

const Workspaces = () => {
	const workspaces = useSelector((state) => state.workspaces);
	const handle = () => {};

	return (
		workspaces.length == 0 ? <CircularProgress /> : (
			<>
				{workspaces.map((workspace) => (
					<Button
						key={workspace._id}
						onClick={handle}
						sx={{ my: 2, color: 'white', display: 'block' }}
					>
						<Workspace workspace={workspace}/>
					</Button>
				))}
			</>
		)
	)
};
export default Workspaces;
