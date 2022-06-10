import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import schemaLogin from '../schemas/login';
import { statusMessage } from '../utils/functions';
import service from '../services/login';
import { passwordJWT, unauthorized } from '../utils/constants';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const { error } = schemaLogin.validate({ username, password });
    if (error) return next(statusMessage(StatusCodes.BAD_REQUEST, error.message));

    const user = await service({ username, password });
    if (!user) return next(statusMessage(StatusCodes.UNAUTHORIZED, unauthorized));

    const token = jwt.sign({ data: username }, passwordJWT);
    return res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    next();
  }
};

export default login;