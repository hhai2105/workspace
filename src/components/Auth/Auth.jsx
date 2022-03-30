import { Paper, Button, TextField, Grid, Box, Typography} from '@mui/material';
import {useState} from 'react';
import Input from './Input.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {signin} from '../../actions/Auth.js';
import {useNavigate} from 'react-router-dom';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

function Auth(){
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isSignup, setIsSignup] = useState(false);
	const hasFailed = useSelector((state) => state.hasFailed);
	const [showPassword, setShowPassword] = useState(false);

	const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
	const [form, setForm] = useState(initialState);

	function handleSubmit(e){
		e.preventDefault();
		if(isSignup){
		}else{
			dispatch(signin(form, ()=>navigate));
		}
	}

	function handleChange(e){
		setForm({...form, [e.target.name]: e.target.value});
	}

	function toggleSignup(){
		setIsSignup((prevState) => !prevState);
	}
	function toggleShowPassword(){
		setShowPassword((prevState) => !prevState);
	}
	return(
		<form onSubmit={handleSubmit}>
			<Grid container spacing={0}
				  alignItems="center"
				  justifyContent="center"
				  sx={{minHeight: '100vh'}}>
				<Paper elevation={3} >
					<Grid container spacing={2} aign="center" justifyContent="center">
					</Grid>
					<Typography align="center" variant="h5"><LockRoundedIcon/></Typography>
					<Typography align="center" variant="h5">{isSignup ? "Sign Up" : "Sign in"}</Typography>
					{isSignup && (
						<>
							<Grid container>
								<TextField name="firstname" label="first name" onChange={handleChange} half="true" sx={{m: 1}} />
								<TextField name="lastname" label="last name" onChange={handleChange} half="true" sx={{m: 1}} />
							</Grid>
						</>
					)}
					<Grid>
						<Input name="email" label="email" handleChange={handleChange}/>
						<Input name="password" label="password" type={showPassword?"text":"password"} handleChange={handleChange} handleShowPassword={toggleShowPassword}/>
					</Grid>
					{isSignup && (
						<>
							<Grid container >
								<Input name="confirmPassword" label="repeat password" type={showPassword?"text":"password"} handleChange={handleChange} handleShowPassword={toggleShowPassword}/>
							</Grid>
						</>
					)}
					<Grid>
						<div/>
						<Button type="submit" align="center" variant="contained" sx={{m: 1}}>{isSignup?"Sign Up": "Sign In"}</Button>
						<Button align="center" onClick={toggleSignup}>{isSignup ? "Already have an account? Sign in":"Don't have an account? Sign up"}</Button>
						{
							hasFailed && (
								<Typography>Error, invalid login</Typography>
							)
						}

					</Grid>
				</Paper>
			</Grid>
		</form>
	)
}

export default Auth
