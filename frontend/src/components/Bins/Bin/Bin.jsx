import React from 'react';
import {IconButton, Paper, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Bin({bin}) {
    console.log(bin)
    return (
        <Paper elevation={10}
               sx = {{minHeight: '30vw'}} 
        >
            <Typography align="center" variant="h5">{bin.name}</Typography>
        </Paper>
    ) 
}
