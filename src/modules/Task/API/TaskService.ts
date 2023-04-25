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

const renameTaskById = async (
  userId: number,
  boardId: number | null,
  taskId: number | null,
  title: string
) => {
  await $api.put<ITask>(
    `/tasks/${taskId}`,
    {
      text: title,
    },
    {
      params: {
        userId: userId,
        boardId: boardId,
      },
    }
  );
};

export const TaskService = {
  findTaskById,
  renameTaskById,
};
