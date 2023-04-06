import { IColumn } from '@shared/types';
import { FC } from 'react';
import { BoardColumnContent } from './BoardColumnContent';
import { BoardColumnFooter } from './BoardColumnFooter';
import { BoardColumnHeader } from './BoardColumnHeader';

// export const columnIdAtom = atom<number | null>(null);
// export const [columnAtom] = atomsWithQuery<IColumn>((get) => {
//   const userId = get(userIdAtom);
//   const boardId = get(boardIdAtom);
//   const columnId = get(columnIdAtom);

//   return {
//     queryKey: ['query-column', userId, boardId, columnId],
//     queryFn: () =>
//       columnId
//         ? ColumnService.findColumnById(userId, boardId, columnId)
//         : Promise.reject('Column id is null'),
//   };
// });

export const BoardColumn: FC<{ column: IColumn }> = ({ column }) => {
  return (
    <div className="flex h-full w-72 shrink-0 flex-col space-y-4">
      <BoardColumnHeader title={column.title} />
      <BoardColumnContent tasks={column.tasks} />
      <BoardColumnFooter />
    </div>
  );
};
