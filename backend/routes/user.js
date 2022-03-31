import express from 'express';
const router = express.Router();
import { getUsers, getUser, createUser, deleteUser, updateUser} from '../controllers/users.js';

router.route('/').get(getUsers);
router.route('/:id').get(getUser);
router.route('/add').post(createUser);
router.route('/delete/:id').delete(deleteUser);
router.route('/update/:id').post(updateUser);

export default router;
