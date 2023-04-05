import { useBoardData } from '@page/BoardPage/hooks';
import { BoardColumn } from './BoardColumn';
import { BoardColumnLayout } from './BoardColumnLayout';

export const BoardContent = () => {
  const [data] = useBoardData();
  return (
    <BoardColumnLayout>
      {/* <BoardColumn /> */}
      {data.columns.map((column) => (
        <BoardColumn column={column} />
      ))}
    </BoardColumnLayout>
  );
};
