import { FC } from 'react';
import HeaderButton from '../../../shared/UI/Buttons/HeaderButton';
import SearchBar from '../../../shared/UI/SearchBar/SearchBar';

const HomeHeader: FC<{ totalBoard: number }> = ({ totalBoard }) => {
  return (
    <div className="flex h-full items-center justify-between">
      {/* Left part of header */}
      <div className="inline-flex flex-col">
        <span className="text-2xl font-black">All your project</span>
        <span className=" text-gray-400">Total project: {totalBoard}</span>
      </div>
      {/* Right part of header */}
      <div className="flex items-center space-x-3">
        <HeaderButton
          text="Create board"
          handlerFn={() => {
            console.log('test');
          }}
        />
        <SearchBar
          placeholder="Search project"
          handlerFn={() => {
            console.log('test');
          }}
        />
      </div>
    </div>
  );
};

export default HomeHeader;
