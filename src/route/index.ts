import { Router } from 'express';
import orderRouter from './orders';
import productRouter from './products';
import userRouter from './users';
import controllerLogin from '../controllers/login';

const router = Router();

router.post('/login', controllerLogin);
router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);
export default router;