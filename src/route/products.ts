import { Router } from 'express';
import * as controller from '../controllers/products';

const productRouter = Router();

productRouter.get('/', controller.getAll);
productRouter.get('/:id', controller.getById);
productRouter.post(
  '/', 
  controller.validateBody,
  controller.create,
);

export default productRouter;