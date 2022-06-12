import { Router } from 'express';
import * as controller from '../controllers/orders';
import validateToken from '../middleware/validateToken';

const orderRouter = Router();

orderRouter.get('/', controller.getAll);
orderRouter.post('/', validateToken, controller.validateProductsIds, controller.create);

export default orderRouter;