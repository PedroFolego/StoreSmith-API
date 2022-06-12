import { User, UserId } from '../interfaces';
import connection from './connection';

export const getUser = async (
  { username, password }: Pick<User, 'username' | 'password'>,
): Promise<User[]> => {
  const [user] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );
  return user as User[];
};

export const validateUser = async (username: string): Promise<UserId[]> => {
  const [user] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username = ?',
    [username],
  );
  return user as UserId[];
};
