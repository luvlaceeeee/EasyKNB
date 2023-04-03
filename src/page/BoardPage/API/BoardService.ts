import { $api } from '@shared/API';
import { IBoard } from '@shared/types';

const findBoardByUserId = async (
  userId: number,
  boardId: number | string | undefined
) => {
  const { data } = await $api.get<IBoard>(`/boards/${boardId}`, {
    params: {
      userId: userId,
    },
  });
  return data;
};

const deleteBoardById = async (
  userId: number,
  boardId: number | string | undefined
) => {
  const { data } = await $api.delete(`/boards/${boardId}`, {
    params: {
      userId: userId,
    },
  });
  return data;
};

const renameBoardById = async (
  userId: number,
  boardId: number | null,
  title: string
) => {
  const { data } = await $api.put(
    `/boards/${boardId}`,
    {
      title: title,
    },
    {
      params: {
        userId: userId,
      },
    }
  );
  return data;
};

export const BoardService = {
  findBoardByUserId,
  renameBoardById,
  deleteBoardById,
};
