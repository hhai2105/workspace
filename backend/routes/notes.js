import express from 'express';
const router = express.Router();
import { getNotes, getNote, addNote, deleteNote, updateNote} from '../controllers/notes.js';

router.route('/').get(getNotes);
router.route('/:id').get(getNote);
router.route('/add').post(addNote);
router.route('/delete/:id').delete(deleteNote);
router.route('/update/:id').post(updateNote);

export default router;
