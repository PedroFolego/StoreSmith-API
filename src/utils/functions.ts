import { StatusCodes } from 'http-status-codes';

export const statusMessage = (status: number, message: string) => ({ status, message });

export const validateMsg = (error: Error) => {
  if (error.message.includes('is required')) { 
    return statusMessage(StatusCodes.BAD_REQUEST, error.message); 
  }
  return statusMessage(StatusCodes.UNPROCESSABLE_ENTITY, error.message);
};
