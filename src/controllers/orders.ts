import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import schemaOrder from '../schemas/order';
import * as service from '../services/orders';
import { statusMessage, validateMsg } from '../utils/functions';

export const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await service.getAll();
    return res.status(StatusCodes.OK).json(orders);
  } catch (error) {
    next();
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    const { productsIds } = req.body;
    const id = await service.findId(authorization as string);
    await service.create(id, productsIds);
    return res.status(StatusCodes.CREATED).json({ userId: id, productsIds });
  } catch (error) {
    next(error);
  }
};

export const validateProductsIds = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productsIds } = req.body;
    const { error } = schemaOrder.validate({ productsIds });
    if (error) {
      if (error.message.includes('does not contain 1')) {
        return next(statusMessage(
          StatusCodes.UNPROCESSABLE_ENTITY, 
          '"productsIds" must include only numbers',
        ));
      }
      
      return next(validateMsg(error));
    }
    return next();
  } catch (error) {
    next(error);
  }
};