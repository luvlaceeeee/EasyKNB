import { $api } from '@/shared/api';
import { ITask } from '@/shared/types';
import { IAddDescToTaskByIdRequest } from '../interfaces/IAddDescToTaskByIdRequest';
import { IDeleteTaskByIdRequest } from '../interfaces/IDeleteTaskByIdRequest';
import { IFindTaskByIdRequest } from '../interfaces/IFindTaskByIdRequest';
import { IRenameTaskByIdRequest } from '../interfaces/IRenameTaskByIdRequest';
import { IUpdateToTaskByIdRequest } from '../interfaces/IUpdateToTaskByIdRequest';

const findTaskById = async (request: IFindTaskByIdRequest): Promise<ITask> =>
  $api
    .get<ITask>(`/tasks/${request.taskId}`, {
      params: {
        userId: request.userId,
        boardId: request.boardId,
        columnId: request.columnId,
      },
    })
    .then(({ data }) => data);

const renameTaskById = (request: IRenameTaskByIdRequest): Promise<void> =>
  $api.put(
    `/tasks/${request.taskId}`,
    {
      text: request.title,
    },
    {
      params: {
        userId: request.userId,
        boardId: request.boardId,
      },
    }
  );

const addDescToTaskById = (request: IAddDescToTaskByIdRequest): Promise<void> =>
  $api.put(
    `/tasks/${request.taskId}`,
    {
      description: request.desc,
    },
    {
      params: {
        userId: request.userId,
        boardId: request.boardId,
      },
    }
  );

const updateToTaskById = (request: IUpdateToTaskByIdRequest): Promise<void> =>
  $api.put(
    `/tasks/${request.taskId}`,
    {
      text: request.title,
      description: request.desc,
    },
    {
      params: {
        userId: request.userId,
        boardId: request.boardId,
      },
    }
  );

const deleteTaskById = (request: IDeleteTaskByIdRequest): Promise<void> =>
  $api.delete(`/tasks/${request.taskId}`, {
    params: {
      userId: request.userId,
      boardId: request.boardId,
      columnId: request.columnId,
    },
  });

export const TaskService = {
  findTaskById,
  renameTaskById,
  addDescToTaskById,
  updateToTaskById,
  deleteTaskById,
};
