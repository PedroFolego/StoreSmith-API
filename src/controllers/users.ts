import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import schemaUser from '../schemas/user';
import * as service from '../services/users';
import { passwordJWT } from '../utils/constants';
import { validateMsg } from '../utils/functions';

export const validateUser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const { username, classe, level, password } = req.body;
    const { error } = schemaUser.validate({ username, classe, level, password });
    if (error) return next(validateMsg(error));
    next();
  } catch (error) {
    next(error);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, classe, level, password } = req.body;
    await service.create({ username, classe, level, password });
    const token = jwt.sign({ data: username }, passwordJWT);
    return res.status(StatusCodes.CREATED).json({ token });
  } catch (error) {
    next(error);
  }
};

export const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await service.getAll();
    return res.status(StatusCodes.OK).json(users);
  } catch (error) {
    next(error);
  }
};