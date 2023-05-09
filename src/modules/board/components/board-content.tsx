import { Suspense } from 'react';
import { useBoardData } from '../hooks';
import { BoardColumnLayout } from './board-column-layout';
import { BoardColumn } from './board-column';
import { BoardColumnLoader } from './board-column-loader';

export const BoardContent = () => {
  const { data } = useBoardData();

  return (
    <BoardColumnLayout>
      {data &&
        data.columns.map((column) => (
          <Suspense key={column.id} fallback={<BoardColumnLoader />}>
            <BoardColumn column={column} />
          </Suspense>
        ))}
    </BoardColumnLayout>
  );
};
