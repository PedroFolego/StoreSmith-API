import { User } from '../interfaces';
import * as model from '../models/users';

export const create = (body: User): Promise<void> => model.create(body);
