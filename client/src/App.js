import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import {useDispatch} from 'react-redux';

import { getWindows } from './actions/windows'
import Windows from './components/Windows/Windows'
import Form from './components/WindowsForm/Form'

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWindows());
	}, [dispatch]);
	return (
		<Container>
			<AppBar position="static" color="inherit">
				<Typography variant="h2" align="center">Memories</Typography>
			</AppBar>
			<br/>
			<Grow in>
			<Container>
					<Grid container justify="space-between" alignItems="stretch" spacing={3}>
						<Grid item xs={12} sm={7}>
							<Windows />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
}

export default App;
