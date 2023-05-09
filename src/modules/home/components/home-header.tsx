import { useAtom } from 'jotai';
import { FC, useState } from 'react';
import { allBoards } from '@page/HomePage/components/HomePage';
import { Modal, Button } from '@shared/UI';
import { CreateBoardModal } from './create-board-modal';

export const HomeHeader: FC = () => {
  const [data] = useAtom(allBoards);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex h-full items-center justify-between">
      {/* Left part of header */}
      <div className="inline-flex flex-col">
        <span className="text-2xl font-black dark:text-zinc-200">
          All your board's
        </span>
        <span className=" text-gray-400">Total boards: {data.length}</span>
      </div>

      {/* Right part of header */}
      <div className="flex items-center space-x-3">
        <Button onClick={() => setModalOpen(true)}>Create board</Button>
      </div>
      <Modal setOpen={(value) => setModalOpen(value)} isOpen={isModalOpen}>
        <CreateBoardModal setOpen={(value) => setModalOpen(value)} />
      </Modal>
    </div>
  );
};
