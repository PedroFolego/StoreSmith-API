import { ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces';
import connection from './connection';

export const getAll = async (): Promise<Product[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');

  return products as Product[];
};

export const getById = async (id: string): Promise<Product> => {
  const [data] = await connection.execute('SELECT * FROM Trybesmith.Products WHERE id = ?', [id]);
  const [product] = data as Product[];
  return product;
};

export const create = async (
  { name, amount }: Pick<Product, 'name' | 'amount'>,
): Promise<Product> => {
  const [data] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const product: Product = {
    id: data.insertId,
    name,
    amount,
  };
  return product;
}; 