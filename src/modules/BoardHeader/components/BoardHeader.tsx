import { useBoardData } from '@page/BoardPage/hooks';
import { HeaderButton, Modal } from '@shared/UI';
import { useState } from 'react';
import { CreateColumnModal } from './CreateColumnModal';
import { DeleteBoardModal } from './DeleteBoardModal';
import { RenameBoardModal } from './RenameBoardModal';

//TODO create enum for modal target
export const BoardHeader = () => {
  const [isModalOpen, setModalOpen] = useState({ target: '', state: false });
  const [data] = useBoardData();
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
            setModalOpen({ target: 'delete', state: true });
          }}
          // className="border-red-400 dark:border-red-900"
        />
        <HeaderButton
          text="Rename board"
          onClick={() => {
            setModalOpen({ target: 'rename', state: true });
          }}
          // className="border-blue-400 dark:border-blue-900"
        />
        <HeaderButton
          text="Create column"
          onClick={() => {
            setModalOpen({ target: 'create', state: true });
          }}
        />
      </div>
      <Modal isOpen={isModalOpen.state} setOpen={setModalOpen}>
        {isModalOpen.target === 'rename' && (
          <RenameBoardModal setOpen={setModalOpen} boardTitle={data.title} />
        )}
        {isModalOpen.target === 'create' && (
          <CreateColumnModal setOpen={setModalOpen} />
        )}
        {isModalOpen.target === 'delete' && (
          <DeleteBoardModal setOpen={setModalOpen} title={data.title} />
        )}
      </Modal>
    </div>
  );
};
