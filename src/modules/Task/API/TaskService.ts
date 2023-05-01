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

const addDescToTaskById = async (
  userId: number,
  boardId: number | null,
  taskId: number | null,
  desc: string
) => {
  await $api.put<ITask>(
    `/tasks/${taskId}`,
    {
      description: desc,
    },
    {
      params: {
        userId: userId,
        boardId: boardId,
      },
    }
  );
};

const updateToTaskById = async (
  userId: number,
  boardId: number | null,
  taskId: number | null,
  title: string,
  desc: string
) => {
  await $api.put<ITask>(
    `/tasks/${taskId}`,
    {
      text: title,
      description: desc,
    },
    {
      params: {
        userId: userId,
        boardId: boardId,
      },
    }
  );
};

const deleteTaskById = async (
  userId: number,
  boardId: number | null,
  taskId: number | null,
  columnId: number | null
) => {
  await $api.delete<ITask>(`/tasks/${taskId}`, {
    params: {
      userId: userId,
      boardId: boardId,
      columnId: columnId,
    },
  });
};

export const TaskService = {
  findTaskById,
  renameTaskById,
  addDescToTaskById,
  updateToTaskById,
  deleteTaskById,
};
