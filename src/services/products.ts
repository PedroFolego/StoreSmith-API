import { Product } from '../interfaces';
import * as model from '../models/products';

export const getAll = async (): Promise<Product[]> => model.getAll();

export const getByID = async (id: string): Promise<Product> => model.getById(id);

export const create = async (
  body: Pick<Product, 'name' | 'amount'>,
): Promise<Product> => model.create(body);