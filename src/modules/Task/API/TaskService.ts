import { $api } from '@shared/API';
import { ITask } from '@shared/types';
const findTaskById = async (
  userId: number,
  boardId: number | null,
  columnId: number | null,
  taskId: number | null
): Promise<ITask> => {
  const { data } = await $api.get<ITask>(`/tasks/${taskId}`, {
    params: {
      userId: userId,
      boardId: boardId,
      columnId: columnId,
    },
  });
  return data;
};

export const TaskService = {
  findTaskById,
};
