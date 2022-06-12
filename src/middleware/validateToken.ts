import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { JwtPayloadHandler } from '../interfaces';
import { validateUser } from '../models/login';
import { passwordJWT } from '../utils/constants';
import { statusMessage } from '../utils/functions';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return next(statusMessage(StatusCodes.UNAUTHORIZED, 'Token not found'));
    
    const { data } = jwt.verify(authorization, passwordJWT) as JwtPayloadHandler;
    const [user] = await validateUser(data);
    if (!user) return next(statusMessage(StatusCodes.UNAUTHORIZED, 'Invalid token'));
    return next();
  } catch (error) {
    next(statusMessage(StatusCodes.UNAUTHORIZED, 'Invalid token'));
  }
};

export default validateToken;