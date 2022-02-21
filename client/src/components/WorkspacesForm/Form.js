import React from 'react';
import { TextField, Button, Typography, Paper} from '@mui/material';
import FileBase from 'react-file-base64';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createWorkspace } from '../../actions/workspaces.js';

const Form = () => {
	const dispatch = useDispatch();
	const [formsData, setFormsData] = useState({
		name: ''
	});

	const [show, setShow] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createWorkspace(formsData));
	};
	const clear = () => {}
	const showForm = () => {setShow(true)}
	const hideForm = () => {setShow(false)}


	return (
		<>
			{show ? 
			 <form autoComplete="off" noValidate onSubmit={handleSubmit}>
				 <TextField required name="workspace" variant="outlined" label="Workspace"
							value={formsData.name}
							onChange={(e) => setFormsData({...formsData, name: e.target.value})}/>
				 <Button variant="contained" onClick={hideForm}>hide Form</Button>
			 </form>
			 :
			 <Button onClick={showForm} variant="contained">+</Button>
			}
		</>
	);
}
export default Form
