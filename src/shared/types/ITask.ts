import { IUser } from './IUser';

export interface ITask {
  id: number;
  text: string;
  description: string;
  position: number;
  makers: IUser[];
}
