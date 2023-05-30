export interface IFindTaskByIdRequest {
  userId: number;
  boardId: number | null;
  columnId: number | null;
  taskId: number | null;
}
