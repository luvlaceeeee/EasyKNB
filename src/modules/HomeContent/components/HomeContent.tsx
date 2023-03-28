import BoardCard from './BoardCard';

const HomeContent = () => {
  return (
    <div className="scrollbar flex flex-1 space-x-5 overflow-auto p-7 pt-0">
      <BoardCard id={3} title="Agile board" />
    </div>
  );
};

export default HomeContent;
