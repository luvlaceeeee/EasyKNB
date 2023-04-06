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

export const ColumnService = {
  findColumnById,
};
