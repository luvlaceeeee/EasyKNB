import { Skeleton } from '@/shared/ui/skeleton';
import { Suspense } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { BoardColumn } from '../../column/board-column';
import { useBoardData } from '../hooks';
import { BoardColumnLayout } from './board-column-layout';

export const BoardContent = () => {
  const { data } = useBoardData();

  return (
    <DragDropContext onDragEnd={() => console.log('first')}>
      <BoardColumnLayout>
        {data &&
          data.columns.map((column, index) => (
            <Suspense
              key={column.id}
              fallback={<BoardContent.ColumnSkeleton />}
            >
              <BoardColumn column={column} index={index} />
            </Suspense>
          ))}
      </BoardColumnLayout>
    </DragDropContext>
  );
};

BoardContent.ColumnSkeleton = () => {
  return (
    <div className="ml-7">
      <div className="flex w-72 flex-col">
        <div className="mb-3 flex items-center justify-between">
          <Skeleton className="mt-4 h-6 w-24" />
          <Skeleton className="mt-4 h-10 w-12" />
        </div>
        <div className="space-y-3.5">
          <Skeleton className="h-14" />
          <Skeleton className="h-14" />
          <Skeleton className="h-14" />
          <Skeleton className="h-14" />
          <Skeleton className="h-10" />
        </div>
      </div>
    </div>
  );
};
