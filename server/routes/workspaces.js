import express from 'express';
const router = express.Router();
import { getWorkspaces, getWorkspace, addWorkspaces, deleteWorkspaces, updateWorkspaces} from '../controllers/workspaces.js';

router.route('/').get(getWorkspaces);
router.route('/:id').get(getWorkspace);
router.route('/add').post(addWorkspaces);
router.route('/delete/:id').delete(deleteWorkspaces);
router.route('/update/:id').post(updateWorkspaces);

export default router;
