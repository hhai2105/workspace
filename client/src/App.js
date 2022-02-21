import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import {useDispatch} from 'react-redux';

import { getNotes } from './actions/notes'
import { getWorkspaces } from './actions/workspaces'
import Workspaces from './components/Workspaces/Workspaces'
import WorkspaceForm from './components/WorkspacesForm/Form'
import { Box } from '@mui/material'

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWorkspaces());
	}, [dispatch]);

	return (
		<AppBar position="fixed"  variant="dense">
			<Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex' } }}>
				<Workspaces/>
				<WorkspaceForm/>
			</Box>
		</AppBar>
	);
}

export default App;
