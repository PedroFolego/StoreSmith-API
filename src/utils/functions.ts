import { StatusCodes } from 'http-status-codes';
import { isRequired } from './constants';

export const statusMessage = (status: number, message: string) => ({ status, message });

export const validateMsg = (error: Error) => {
  if (error.message.includes(isRequired)) { 
    return statusMessage(StatusCodes.BAD_REQUEST, error.message); 
  }
  return statusMessage(StatusCodes.UNPROCESSABLE_ENTITY, error.message);
};
