import { User } from '../interfaces';
import connection from './connection';

const getUser = async (
  { username, password }: Pick<User, 'username' | 'password'>,
): Promise<User[]> => {
  const [user] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );
  return user as User[];
};

export default getUser;