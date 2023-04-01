import { useAtom } from 'jotai';
import { allBoards } from '../../../page/HomePage/components/HomePage';
import BoardCard from './BoardCard';

const HomeContent = () => {
  const [data] = useAtom(allBoards);

  return (
    <div className="scrollbar flex flex-1 space-x-5 overflow-auto scroll-smooth p-7 pt-0">
      {data.map((board) => {
        return <BoardCard key={board.id} id={board.id} title={board.title} />;
      })}
    </div>
  );
};

export default HomeContent;
