import HeaderButton from '../../../shared/UI/Buttons/HeaderButton';
import SearchBar from '../../../shared/UI/SearchBar/SearchBar';

const HomeHeader = () => {
  return (
    <div className="flex h-full items-center justify-between p-7">
      {/* Left part of header */}
      <div className="inline-flex flex-col space-y-2">
        <span className="text-2xl font-bold">All your project:</span>
        <span className="text-lg text-gray-400">Total project: {3}</span>
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
