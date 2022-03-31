import {SIGNOUT} from '../../constants/actions.js'
import React, {useState, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router'
import {useDispatch} from 'react-redux'
import { Menu, MenuItem, Typography, Toolbar, AppBar, Box, Button, Avatar, IconButton } from '@mui/material'
import {Link } from 'react-router-dom'

import Workspaces from '../Workspaces/Workspaces.js'
import WorkspaceForm from '../WorkspacesForm/Form.js'

function Navbar(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [showUserMenu, setShowUserMenu] = useState(null);

    useEffect(() =>{
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location, dispatch]);

    function handleShowUserMenu(e){
        setShowUserMenu(e.currentTarget);
    }

    function handleCloseUserMenu(){
        setShowUserMenu(null);
    }

    function signout(){
        dispatch({type: SIGNOUT, data: null});
        navigate("/");
    }

    return(
        <AppBar position="fixed" variant="dense">
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                    <IconButton component={Link} to={"/"}>
                        <Avatar sx={{ bgcolor: "#0000ff" }}>W</Avatar>
                    </IconButton>
                    <Workspaces/>
                    <WorkspaceForm/>
                </Box>
                {
                    user===null ? (
                        <>
                            <Button component={Link} to={"/authentication"} variant="contained" color="primary">Sign In</Button>
                        </>
                    ) : (
                        <>

                            <IconButton onClick={handleShowUserMenu}>
                                <Avatar src={user?.result.imageUrl} ></Avatar>
                            </IconButton>
                            <Menu sx={{ mt: '45px' }}
                                  id="menu-appbar"
                                  anchorEl={showUserMenu}
                                  anchorOrigin={{
                                      vertical: 'top',
                                      horizontal: 'right',
                                  }}
                                  keepMounted
                                  transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'right',
                                  }}
                                  open={Boolean(showUserMenu)}
                                  onClose={handleCloseUserMenu}
                            >
                                <MenuItem key="Home" component={Link} to={"/"}>
                                    <Typography textAlign="center">Home</Typography>
                                </MenuItem>
                                <MenuItem key="Logout" onClick={signout}>
                                    <Typography textAlign="center">Sign Out</Typography>
                                </MenuItem>
                            </Menu>
                        </>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
