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
        <Suspense fallback={<BoardColumnLoader />}>
          <BoardColumn key={column.id} column={column} />
        </Suspense>
      ))}
    </BoardColumnLayout>
  );
};
