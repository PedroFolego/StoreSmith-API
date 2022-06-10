import { Order } from '../interfaces';
import model from '../models/orders';

const getAll = async (): Promise<Order[]> => {  
  const orders = await model();
  const fixOrders = orders.map(({ id, userId, productsIds }) => ({
    id,
    userId,
    productsIds: [productsIds],
  }));
  return fixOrders as Order[];
};

export default getAll;