import { ITask } from './ITask';

export interface IColumn {
  id: number;
  title: string;
  position: number;
  tasks: ITask[];
}
