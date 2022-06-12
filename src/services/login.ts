import { User } from '../interfaces';
import * as model from '../models/login';

const validateUser = async (
  { username, password }: Pick<User, 'username' | 'password'>,
): Promise<boolean> => {
  const [user] = await model.getUser({ username, password });
  if (user) return true;
  return false;
};

export default validateUser;