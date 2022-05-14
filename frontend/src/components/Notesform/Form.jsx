import React, {useState} from 'react';
import {Button, TextField, Dialog, FormControl, DialogActions, DialogContent, DialogTitle} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {createNote} from '../../actions/Notes.js'
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DateAdapter from '@mui/lab/AdapterDateFns';
import FileBase from 'react-file-base64';

export default function Form( binId) {
    const dispatch = useDispatch()
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {PaperProps: {
        style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const [noteData, setNoteData] = useState({ note: '', bin: binId, due: '', file: '' });
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { 
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    function handleSubmit (){
        dispatch(createNote({name, workspaceId}))
        handleClose();
    }

    function handleDueDateChange(newDate){
        setNoteData({...notedata, due: newDate});
    }

    return (

        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div>
                <Button  color="secondary" variant="contained" onClick={handleClickOpen}>
                    Create Note
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Create Note</DialogTitle>
                    <DialogContent>
                        <TextField name="note" variant="outlined" label="Note" fullWidth value={noteData.note} onChange={(e) => setNoteData({ ...noteData, note: e.target.value })} />
                        <DesktopDatePicker
                            label="For desktop"
                            value={noteData.due}
                            onChange={(newValue) => {
                                handleDueDateChange(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </LocalizationProvider>
    );
}
