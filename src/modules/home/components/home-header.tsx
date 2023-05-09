import { FC } from 'react';
import { CreateBoardModal } from './create-board-modal';
import { useAllBoardData } from '../hooks';

export const HomeHeader: FC = () => {
  const { data } = useAllBoardData();

  return (
    <div className="flex h-full items-center justify-between">
      {/* Left part of header */}
      <div className="inline-flex flex-col">
        <span className="text-2xl font-black dark:text-zinc-200">
          All your board's
        </span>
        <span className=" text-gray-400">Total boards: {data?.length}</span>
      </div>

      {/* Right part of header */}
      <div className="flex items-center space-x-3">
        <CreateBoardModal />
      </div>
    </div>
  );
};
