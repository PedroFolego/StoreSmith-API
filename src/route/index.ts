import { Router } from 'express';
import orderRouter from './orders';
import productRouter from './products';
import userRouter from './users';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);

export default router;