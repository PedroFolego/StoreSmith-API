import { Router } from 'express';
import controller from '../controllers/orders';

const orderRouter = Router();

orderRouter.get('/', controller);

export default orderRouter;