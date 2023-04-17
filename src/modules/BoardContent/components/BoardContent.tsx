import { BoardColumn, BoardColumnLayout } from '@modules/BoardColumn';
import { useBoardData } from '@page/BoardPage/hooks';

export const BoardContent = () => {
  const [data] = useBoardData();

  return (
    <BoardColumnLayout>
      {data.columns.map((column) => (
        <BoardColumn key={column.id} column={column} />
      ))}
    </BoardColumnLayout>
  );
};
