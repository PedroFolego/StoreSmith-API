import { Order } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<Order[]> => {
  const [orders] = await connection.execute(`
    SELECT o.id, o.userId, p.id as productsIds FROM Trybesmith.Orders AS o
    JOIN Trybesmith.Products AS p
      ON o.id = p.orderId
  `);
  return orders as Order[];
};

export default getAll;