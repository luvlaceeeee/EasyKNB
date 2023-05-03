export interface IRenameBoardRequest {
  userId: number;
  boardId: number | null;
  title: string;
}
