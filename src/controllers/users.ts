import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import schemaUser from '../schemas/user';
import * as service from '../services/users';
import { passwordJWT } from '../utils/constants';
import { validateMsg } from '../utils/functions';

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, classe, level, password } = req.body;
    const { error } = schemaUser.validate({ username, classe, level, password });
    if (error) next(validateMsg(error));
    next();
  } catch (error) {
    next(error);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, classe, level, password } = req.body;
    await service.create({ username, classe, level, password });
    const token = jwt.sign({ data: { username, classe } }, passwordJWT);
    return res.status(StatusCodes.CREATED).json({ token });
  } catch (error) {
    next(error);
  }
};