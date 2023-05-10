export interface ICreateTaskRequest {
  userId: number;
  boardId: number | null;
  columnId: number | null;
  title: string;
}
