import { $api } from '@shared/API';
import { IColumn } from '@shared/types';

const findColumnById = async (
  userId: number,
  boardId: number | null,
  columnId: number | null
): Promise<IColumn> => {
  const { data } = await $api.get<IColumn>(`/columns/${columnId}`, {
    params: {
      userId: userId,
      boardId: boardId,
    },
  });
  return data;
};

const renameColumnById = async (
  userId: number,
  boardId: number | null,
  columnId: number | null,
  title: string
) => {
  await $api.put<IColumn>(
    `/columns/${columnId}`,
    {
      title: title,
    },
    {
      params: {
        userId: userId,
        boardId: boardId,
      },
    }
  );
};

const deleteColumnById = async (
  userId: number,
  boardId: number | null,
  columnId: number | null
) => {
  await $api.delete<IColumn>(`/columns/${columnId}`, {
    params: {
      userId: userId,
      boardId: boardId,
    },
  });
};

export const ColumnService = {
  findColumnById,
  renameColumnById,
  deleteColumnById,
};
