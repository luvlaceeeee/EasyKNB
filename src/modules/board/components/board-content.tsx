import { Suspense } from 'react';
import { useBoardData } from '../hooks';
import { BoardColumn } from './board-column';
import { BoardColumnLayout } from './board-column-layout';

export const BoardContent = () => {
  const { data } = useBoardData();

  return (
    <BoardColumnLayout>
      {data &&
        data.columns.map((column) => (
          <Suspense key={column.id} fallback={<BoardContent.Skeleton />}>
            <BoardColumn column={column} />
          </Suspense>
        ))}
    </BoardColumnLayout>
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
