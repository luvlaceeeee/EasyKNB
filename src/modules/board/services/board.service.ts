import { $api } from '@/shared/api';
import { IBoard } from '@/shared/types';
import { ICreateColumnRequest, IRenameBoardRequest } from '../interfaces';

const findBoardByUserId = (userId: number, boardId: number): Promise<IBoard> =>
  $api
    .get<IBoard>(`/boards/${boardId}`, {
      params: {
        userId: userId,
      },
    })
    .then(({ data }) => data);

const deleteBoard = (userId: number, boardId: number): Promise<void> =>
  $api.delete(`/boards/${boardId}`, {
    params: {
      userId: userId,
    },
  });

const renameBoard = (request: IRenameBoardRequest): Promise<void> =>
  $api.put(
    `/boards/${request.boardId}`,
    {
      title: request.title,
    },
    {
      params: {
        userId: request.userId,
      },
    }
  );

const createColumn = (request: ICreateColumnRequest): Promise<void> =>
  $api.post(
    `/columns`,
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

export const BoardService = {
  findBoardByUserId,
  renameBoard,
  deleteBoard,
  createColumn,
};
