import express from 'express';
const router = express.Router();
import { getWindows, getWindow, addWindows, deleteWindows, updateWindows} from '../controllers/windows.js';

router.route('/').get(getWindows);
router.route('/:id').get(getWindow);
router.route('/add').post(addWindows);
router.route('/delete/:id').delete(deleteWindows);
router.route('/update/:id').post(updateWindows);

export default router;
