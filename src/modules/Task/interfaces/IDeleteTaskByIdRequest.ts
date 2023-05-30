export interface IDeleteTaskByIdRequest {
  userId: number;
  boardId: number | null;
  taskId: number | null;
  columnId: number | null;
}
