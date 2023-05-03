import { useBoardData } from '../hooks';
import { CreateColumnModal } from './create-column-modal';
import { RenameBoardModal } from './rename-board-modal';

export const BoardHeader = () => {
  const { isSuccess, data } = useBoardData();

  // TODO: add skeleton
  if (!isSuccess) {
    return <div>Skeleton</div>;
  }

  return (
    <div className="flex h-full items-center justify-between">
      {/* Left part of header */}
      <div className="inline-flex flex-col">
        <span className="text-2xl font-black dark:text-zinc-200">
          {data.title}
        </span>
        <span className=" text-gray-400">
          Total column: {data.columns.length}
        </span>
      </div>

      {/* Right part of header */}
      <div className="flex items-center space-x-3">
        <RenameBoardModal boardTitle={data.title} />
        <CreateColumnModal />
      </div>
    </div>
  );
};
