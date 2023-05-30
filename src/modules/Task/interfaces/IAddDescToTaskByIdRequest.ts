export interface IAddDescToTaskByIdRequest {
  userId: number;
  boardId: number | null;
  taskId: number | null;
  desc: string;
}
