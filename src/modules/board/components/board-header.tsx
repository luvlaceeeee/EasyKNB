import { useBoardData } from '../hooks';
import { CreateColumnModal } from './create-column-modal';
import { RenameBoardModal } from './rename-board-modal';

export const BoardHeader = () => {
  const { data } = useBoardData();

  return (
    <div className="flex h-full items-center justify-between">
      {/* Left part of header */}
      <div className="inline-flex flex-col">
        <span className="text-2xl font-black dark:text-zinc-200">
          {data && data.title}
        </span>
        <span className=" text-gray-400">
          Total column: {data && data.columns.length}
        </span>
      </div>

      {/* Right part of header */}
      <div className="flex items-center space-x-3">
        <RenameBoardModal boardTitle={data ? data.title : ''} />
        <CreateColumnModal />
      </div>
    </div>
  );
};
