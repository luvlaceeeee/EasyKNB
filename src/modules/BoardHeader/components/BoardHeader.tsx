import { useBoardData } from '@page/BoardPage/hooks';
import { HeaderButton, Modal } from '@shared/UI';
import { useState } from 'react';
import { CreateColumnModal } from './CreateColumnModal';
import { DeleteBoardModal } from './DeleteBoardModal';
import { RenameBoardModal } from './RenameBoardModal';

export const BoardHeader = () => {
  const [isRenameModalOpen, setRenameModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isCreateColumnModalOpen, setCreateColumnModalOpen] = useState(false);
  const [data] = useBoardData();
  //TODO general state for modal component
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
            setDeleteModalOpen(true);
          }}
          // className="border-red-400 dark:border-red-900"
        />
        <HeaderButton
          text="Rename board"
          onClick={() => {
            setRenameModalOpen(true);
          }}
          // className="border-blue-400 dark:border-blue-900"
        />
        <HeaderButton
          text="Create column"
          onClick={() => {
            setCreateColumnModalOpen(true);
          }}
        />
      </div>
      <Modal isOpen={isRenameModalOpen} setOpen={setRenameModalOpen}>
        {isRenameModalOpen && (
          <RenameBoardModal
            setOpen={setRenameModalOpen}
            boardTitle={data.title}
          />
        )}
      </Modal>
      <Modal
        isOpen={isCreateColumnModalOpen}
        setOpen={setCreateColumnModalOpen}
      >
        {isCreateColumnModalOpen && (
          <CreateColumnModal setOpen={setCreateColumnModalOpen} />
        )}
      </Modal>
      <Modal isOpen={isDeleteModalOpen} setOpen={setDeleteModalOpen}>
        {isDeleteModalOpen && (
          <DeleteBoardModal setOpen={setDeleteModalOpen} title={data.title} />
        )}
      </Modal>
    </div>
  );
};
