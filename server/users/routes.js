import express from 'express';
import * as userController from './UserController';

const router = express.Router();

router.route('/')
      .get(userController.getUsers)
      .post(userController.addUser)
      .put(userController.updateUser);

router.route('/:id')
      .get(userController.getUser)
      .delete(userController.deleteUser);

router.route('/register').post(userController.registerUser);
router.route('/login').post(userController.loginUser);

export default router;