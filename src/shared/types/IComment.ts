import { IUser } from './IUser';

export interface IComment {
  date: string;
  id: number;
  text: string;
  type: string;
  user: IUser;
}
