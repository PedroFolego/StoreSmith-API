import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import service from '../services/orders';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await service();
    return res.status(StatusCodes.OK).json(orders);
  } catch (error) {
    next();
  }
};

export default getAll;