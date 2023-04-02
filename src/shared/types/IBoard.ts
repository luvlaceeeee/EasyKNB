import { IColumn } from './IColumn';

export interface IBoard {
  id: number;
  title: string;
  columns: IColumn[];
}
