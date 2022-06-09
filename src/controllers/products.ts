import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import validateProduct from '../schemas/product';
// import { Product } from '../interfaces';
import * as service from '../services/products';
import { validateMsg } from '../utils/functions';

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await service.getAll();
    return res.status(StatusCodes.OK).json(products);
  } catch (error) {
    next(error);
  }
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const product = await service.getByID(id);
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    next(error);
  }
};

export const validateBody = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    const { error } = validateProduct.validate(body);
    console.log(error);
    
    if (error) return next(validateMsg(error));
    next();
  } catch (error) {
    next(error);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    const product = await service.create(body);
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    next(error);
  }
};