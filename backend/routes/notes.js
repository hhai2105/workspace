import express from 'express';
const router = express.Router();
import { getNotes, createNote, deleteNote, updateNote} from '../controllers/notes.js';

router.route('/').get(getNotes);
router.route('/add').post(createNote);
router.route('/delete/:id').delete(deleteNote);
router.route('/update/:id').post(updateNote);

export default router;
