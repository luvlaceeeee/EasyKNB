import { $api } from '@/shared/api';
import { IBoard } from '@/shared/types';
import { ICreateColumnRequest, IRenameBoardRequest } from '../interfaces';

const findBoardByUserId = async (
  userId: number | null,
  boardId: number | null
): Promise<IBoard> => {
  if (userId && boardId) {
    const { data } = await $api.get<IBoard>(`/boards/${boardId}`, {
      params: {
        userId: userId,
      },
    });

    return data;
  }

  return Promise.reject('Board id is null');
};

const deleteBoardById = async (
  userId: number,
  boardId: number | null
): Promise<void> => {
  await $api.delete(`/boards/${boardId}`, {
    params: {
      userId: userId,
    },
  });
};

const renameBoard = async (request: IRenameBoardRequest): Promise<void> => {
  await $api.put(
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
};

const createColumn = async (request: ICreateColumnRequest): Promise<void> => {
  await $api.post(
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
};

export const BoardService = {
  findBoardByUserId,
  renameBoard,
  deleteBoardById,
  createColumn,
};
