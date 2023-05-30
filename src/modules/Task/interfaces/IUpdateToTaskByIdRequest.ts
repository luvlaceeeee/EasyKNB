export interface IUpdateToTaskByIdRequest {
  userId: number;
  boardId: number | null;
  taskId: number | null;
  title: string;
  desc: string;
}
