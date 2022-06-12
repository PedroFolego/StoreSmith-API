import { ResultSetHeader } from 'mysql2';
import { Order } from '../interfaces';
import connection from './connection';
// import * as modelProduct from './products';

export const getAll = async (): Promise<Order[]> => {
  const [orders] = await connection.execute(`
    SELECT o.id, o.userId, p.id as productsIds FROM Trybesmith.Orders AS o
    JOIN Trybesmith.Products AS p
      ON o.id = p.orderId
  `);
  return orders as Order[];
};

export const create = async (id: number, products: number[]): Promise<void> => {
  const [order] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?)', 
    [id],
  );
  const { insertId } = order;
    
  products.forEach(async (productId) => {
    await connection.execute(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [insertId, productId],
    );
  });
};