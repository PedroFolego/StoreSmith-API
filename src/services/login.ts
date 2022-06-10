import { User } from '../interfaces';
import model from '../models/login';

const validateUser = async (
  { username, password }: Pick<User, 'username' | 'password'>,
): Promise<boolean> => {
  const [user] = await model({ username, password });
  if (user) return true;
  return false;
};

export default validateUser;