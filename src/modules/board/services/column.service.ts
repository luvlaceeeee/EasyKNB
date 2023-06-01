import { $api } from '@/shared/api';
import { IColumn } from '@/shared/types';
import { IRenameColumnRequest } from '../interfaces';
import { ICreateTaskRequest } from '../interfaces/ICreateTaskRequest';
import { IDeleteColumnRequest } from '../interfaces/IDeleteColumnRequest';
import { IFindColumnRequest } from '../interfaces/IFindColumnRequest';

const findColumnById = async (request: IFindColumnRequest): Promise<IColumn> =>
  $api
    .get<IColumn>(`/columns/${request.columnId}`, {
      params: {
        userId: request.userId,
        boardId: request.boardId,
      },
    })
    .then(({ data }) => data);

const renameColumnById = (request: IRenameColumnRequest): Promise<void> =>
  $api.put(
    `/columns/${request.columnId}`,
    {
      title: request.title,
    },
    {
      params: {
        userId: request.userId,
        boardId: request.boardId,
      },
    }
  );

const deleteColumnById = (request: IDeleteColumnRequest): Promise<void> =>
  $api.delete(`/columns/${request.columnId}`, {
    params: {
      userId: request.userId,
      boardId: request.boardId,
    },
  });

const createTaskByColumnID = (request: ICreateTaskRequest): Promise<number> =>
  $api
    .post(
      `/tasks/`,
      {
        text: request.title,
      },
      {
        params: {
          userId: request.userId,
          boardId: request.boardId,
          columnId: request.columnId,
        },
      }
    )
    .then(({ status }) => status);

export const ColumnService = {
  findColumnById,
  renameColumnById,
  deleteColumnById,
  createTaskByColumnID,
};
