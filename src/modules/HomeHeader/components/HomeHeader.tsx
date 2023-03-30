import { useAtom } from 'jotai';
import { FC, useState } from 'react';
import { allBoards } from '../../../page/HomePage/components/HomePage';
import HeaderButton from '../../../shared/UI/Buttons/HeaderButton';
import Modal from '../../../shared/UI/Modal/Modal';
import SearchBar from '../../../shared/UI/SearchBar/SearchBar';

const HomeHeader: FC = () => {
  const [data] = useAtom(allBoards);
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex h-full items-center justify-between">
      {/* Left part of header */}
      <div className="inline-flex flex-col">
        <span className="text-2xl font-black">All your project</span>
        <span className=" text-gray-400">Total project: {data.length}</span>
      </div>
      {/* Right part of header */}
      <div className="flex items-center space-x-3">
        <HeaderButton
          text="Create board"
          onClick={() => {
            setModalOpen(true);
          }}
        />
        <SearchBar
          placeholder="Search project"
          handlerFn={() => {
            console.log('test');
          }}
        />
      </div>
      <Modal isOpen={isModalOpen} setOpen={setModalOpen}>
        Create board
      </Modal>
    </div>
  );
};

export default HomeHeader;
