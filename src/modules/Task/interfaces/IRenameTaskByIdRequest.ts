export interface IRenameTaskByIdRequest {
  userId: number;
  boardId: number | null;
  taskId: number | null;
  title: string;
}
