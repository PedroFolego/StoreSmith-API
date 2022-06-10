import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { validateUser } from '../models/login';
import { passwordJWT } from '../utils/constants';
import { statusMessage } from '../utils/functions';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return next(statusMessage(StatusCodes.UNAUTHORIZED, 'Token not found'));
    const decoded = jwt.verify(authorization, passwordJWT) as { data: string };
    const [user] = await validateUser(decoded.data);
    if (!user) return next(statusMessage(StatusCodes.UNAUTHORIZED, 'Invalid token'));
    next();
  } catch (error) {
    next(error);
  }
};

export default validateToken;