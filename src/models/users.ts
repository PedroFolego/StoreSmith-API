import { User } from '../interfaces';
import connection from './connection';

export const create = async ({ username, classe, level, password }: User): Promise<void> => {
  await connection.execute(
    'INSERT INTO Trybesmith.Users (username, classe, level, password ) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
};

export const getAll = async (): Promise<User[]> => {
  const [users] = await connection.execute('SELECT * FROM Trybesmith.Users');
  return users as User[];
};
