import { IColumn } from '@/shared/types';
import { FC } from 'react';
import { useColumnData } from '../hooks';
import { BoardColumnContent } from './column/board-column-content';
import { BoardColumnHeader } from './column/board-column-header';

export const BoardColumn: FC<{ column: IColumn }> = ({ column }) => {
  const { data } = useColumnData(column.id);

  return (
    <div className="flex h-full w-72 shrink-0 flex-col space-y-4">
      <BoardColumnHeader
        title={data ? data.title : ''}
        columnId={data ? data.id : 0}
      />
      <BoardColumnContent
        columnId={data ? data.id : 0}
        tasks={data ? data.tasks : []}
      />
    </div>
  );
};
