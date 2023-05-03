import {
  BoardColumn,
  BoardColumnLayout,
  BoardColumnLoader,
} from '@modules/BoardColumn';
import { useBoardData } from '@page/BoardPage/hooks';
import { Suspense } from 'react';

export const BoardContent = () => {
  const [data] = useBoardData();

  return (
    <BoardColumnLayout>
      {data.columns.map((column) => (
        <Suspense key={column.id} fallback={<BoardColumnLoader />}>
          <BoardColumn column={column} />
        </Suspense>
      ))}
    </BoardColumnLayout>
  );
};
