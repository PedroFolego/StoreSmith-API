import jwt from 'jsonwebtoken';
import { JwtPayloadHandler, Order } from '../interfaces';
import * as model from '../models/orders';
import { passwordJWT } from '../utils/constants';
import * as modelLogin from '../models/login';

export const getAll = async (): Promise<Order[]> => {  
  const orders = await model.getAll();
  const fixOrders = orders.map(({ id, userId, productsIds }) => ({
    id,
    userId,
    productsIds: [productsIds],
  }));
  return fixOrders as Order[];
};

export const findId = async (authorization: string): Promise<number> => {
  const decoded = jwt.verify(authorization, passwordJWT) as JwtPayloadHandler;
  const [user] = await modelLogin.validateUser(decoded.data);
  return user.id;
};

export const create = async (id:number, products: number[]): Promise<void> => 
  model.create(id, products);