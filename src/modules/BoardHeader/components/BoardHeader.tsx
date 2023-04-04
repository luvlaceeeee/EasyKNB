import { DeleteBoardModal } from '@modules/HomeHeader';
import { boardAtom, boardIdAtom } from '@page/BoardPage/components/BoardPage';
import { HeaderButton, Modal } from '@shared/UI';
import { stringToNumber } from '@shared/helpers';
import { useAtom, useSetAtom } from 'jotai';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { RenameBoardModal } from './RenameBoardModal';

const useBoardData = () => {
  const setBoardId = useSetAtom(boardIdAtom);
  const { boardId } = useParams();

  setBoardId(stringToNumber(boardId));

  return useAtom(boardAtom);
};

export const BoardHeader = () => {
  const [isRenameModalOpen, setRenameModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
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
            setDeleteModalOpen(true);
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
      <Modal isOpen={isRenameModalOpen} setOpen={setRenameModalOpen}>
        {isRenameModalOpen && <RenameBoardModal setOpen={setRenameModalOpen} />}
      </Modal>
      <Modal isOpen={isDeleteModalOpen} setOpen={setDeleteModalOpen}>
        {isDeleteModalOpen && (
          <DeleteBoardModal setOpen={setDeleteModalOpen} title={data.title} />
        )}
      </Modal>
    </div>
  );
};
