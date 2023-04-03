import { useAtom } from 'jotai';
import { useState } from 'react';
import { board } from '../../../page/BoardPage/components/BoardPage';
import HeaderButton from '../../../shared/UI/Buttons/HeaderButton';

const BoardHeader = () => {
  const [data] = useAtom(board);
  const [isRenameModalOpen, setRenameModalOpen] = useState(false);

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
        <HeaderButton
          text="Delete board"
          onClick={() => {
            console.log('first');
          }}
        />
        <HeaderButton
          text="Rename board"
          onClick={() => {
            setRenameModalOpen(true);
          }}
        />
        <HeaderButton
          text="Create column"
          onClick={() => {
            console.log('first');
          }}
        />
      </div>
      {/* <RenameBoardModal
        isOpen={isRenameModalOpen}
        setOpen={setRenameModalOpen}
      /> */}
    </div>
  );
};

export default BoardHeader;
