import { boardIdAtom } from '@page/BoardPage';
import { userIdAtom } from '@shared/store';
import { IColumn } from '@shared/types';
import { atom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { FC } from 'react';
import { ColumnService } from '../API';
import { useColumnData } from '../hooks/useColumnData';
import { BoardColumnContent } from './BoardColumnContent';
import { BoardColumnFooter } from './BoardColumnFooter';
import { BoardColumnHeader } from './BoardColumnHeader';

export const columnIdAtomFetch = atom<number | null>(null);
export const [columnAtom] = atomsWithQuery<IColumn>((get) => {
  const userId = get(userIdAtom);
  const boardId = get(boardIdAtom);
  const columnId = get(columnIdAtomFetch);

  return {
    queryKey: ['query-column', userId, boardId, columnId],
    queryFn: () =>
      columnId
        ? ColumnService.findColumnById(userId, boardId, columnId)
        : Promise.reject('Column id is null'),
  };
});

export const BoardColumn: FC<{ column: IColumn }> = ({ column }) => {
  const [data] = useColumnData(column.id);
  return (
    // <Suspense fallback={<h1>Loading profile...</h1>}>
    <div className="flex h-full w-72 shrink-0 flex-col space-y-4">
      <BoardColumnHeader title={data.title} id={data.id} />
      <BoardColumnContent tasks={data.tasks} />
      <BoardColumnFooter id={data.id} />
    </div>
    // </Suspense>
  );
};
