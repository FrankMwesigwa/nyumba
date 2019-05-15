import express from 'express';
import userRoutes from './users/routes';

const router = express.Router();

router.use('/users', userRoutes)

export default router
