import { BoardCard } from './board-card';
import { useAllBoardData } from '../hooks';

export const HomeContent = () => {
  const { data } = useAllBoardData();

  return (
    <div className="scrollbar flex flex-1 space-x-5 overflow-auto scroll-smooth p-7 pt-0">
      {data?.map((board) => {
        return <BoardCard key={board.id} id={board.id} title={board.title} />;
      })}
    </div>
  );
};
