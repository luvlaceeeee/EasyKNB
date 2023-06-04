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
            <Suspense key={column.id} fallback={<BoardContent.Skeleton />}>
              <BoardColumn column={column} index={index} />
            </Suspense>
          ))}
      </BoardColumnLayout>
    </DragDropContext>
  );
};

BoardContent.Skeleton = function BoardContentSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-3 h-10 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
      <div className="mb-4 h-44 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
      <div className="h-14 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
    </div>
  );
};
