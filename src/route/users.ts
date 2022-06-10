import { Router } from 'express';
import * as controller from '../controllers/users';

const userRouter = Router();

userRouter.post('/', controller.validateUser, controller.create);

export default userRouter;