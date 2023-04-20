import { boardIdAtom } from '@page/BoardPage';
import { userIdAtom } from '@shared/store';
import { IColumn } from '@shared/types';
import { useAtomValue } from 'jotai';
import { FC, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { ColumnService } from '../API';
import { BoardColumnContent } from './BoardColumnContent';
import { BoardColumnFooter } from './BoardColumnFooter';
import { BoardColumnHeader } from './BoardColumnHeader';

// export const columnIdAtomFetch = atom<number | null>(null);
// export const [columnAtom] = atomsWithQuery<IColumn>((get) => {
//   const userId = get(userIdAtom);
//   const boardId = get(boardIdAtom);
//   const columnId = get(columnIdAtomFetch);

//   return {
//     queryKey: ['query-column', userId, boardId, columnId],
//     queryFn: () =>
//       columnId
//         ? ColumnService.findColumnById(userId, boardId, columnId)
//         : Promise.reject('Column id is null'),
//   };
// });

export const BoardColumn: FC<{ column: IColumn }> = ({ column }) => {
  // const [data] = useColumnData(column.id);
  const [isCreateMenuOpen, setCreateMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const setCreateMenuOpenWithScroll = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
    setCreateMenuOpen(true);
  };

  const userId = useAtomValue(userIdAtom);
  const boardId = useAtomValue(boardIdAtom);
  const { data } = useQuery<IColumn>(
    ['query-column', column.id],
    () => ColumnService.findColumnById(userId, boardId, column.id),
    { suspense: true }
  );

  // if (isLoading) return <BoardColumnLoader />;

  return (
    <div className="flex h-full w-72 shrink-0 flex-col space-y-4">
      <BoardColumnHeader title={data?.title} id={data?.id} />
      <BoardColumnContent
        columnId={data?.id}
        tasks={data?.tasks}
        isCreateMenuOpen={isCreateMenuOpen}
        setCreateMenuOpen={setCreateMenuOpen}
        ref={menuRef}
      />
      <BoardColumnFooter
        id={data?.id}
        setCreateMenuOpen={setCreateMenuOpenWithScroll}
        isCreateMenuOpen={isCreateMenuOpen}
      />
    </div>
  );
};
