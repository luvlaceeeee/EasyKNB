import { $api } from "@/shared/api";
import { IColumn, ITask } from "@/shared/types";

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
): Promise<void> => 
  $api.put(
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

const deleteColumnById = (
  userId: number,
  boardId: number | null,
  columnId: number | null
) => 
   $api.delete(`/columns/${columnId}`, {
    params: {
      userId: userId,
      boardId: boardId,
    },
  });
;

const createTaskByColumnID = async (
  userId: number,
  boardId: number | null,
  columnId: number | null,
  title: string
): Promise<ITask> => {
  const { data } = await $api.post<ITask>(
    `/tasks/`,
    {
      text: title,
    },
    {
      params: {
        userId: userId,
        boardId: boardId,
        columnId: columnId,
      },
    }
  );

  return data;
};

export const ColumnService = {
  findColumnById,
  renameColumnById,
  deleteColumnById,
  createTaskByColumnID,
};
