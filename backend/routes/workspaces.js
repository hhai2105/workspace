import express from 'express';
const router = express.Router();
import { getWorkspaces, getWorkspace, createWorkspace, deleteWorkspace, updateWorkspace} from '../controllers/workspaces.js';

router.route('/').get(getWorkspaces);
router.route('/:id').get(getWorkspace);
router.route('/add').post(createWorkspace);
router.route('/delete/:id').delete(deleteWorkspace);
router.route('/update/:id').post(updateWorkspace);

export default router;
