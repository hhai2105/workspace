import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteBin} from '../../../actions/Bins.js';
import {IconButton, Paper, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Bin({bin}) {
    const dispatch = useDispatch();
    function handleDelete(){
        dispatch(deleteBin(bin._id));
    }
    return (
        <Paper elevation={10}
               sx = {{minHeight: '30vw'}} 
        >
            <Typography align="center" variant="h5">{bin.name}</Typography>
            <IconButton onClick={handleDelete}>
                <DeleteIcon/>
            </IconButton>
        </Paper>
    ) 
}
