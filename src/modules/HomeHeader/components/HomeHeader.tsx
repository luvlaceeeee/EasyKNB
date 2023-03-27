const HomeHeader = () => {
  return (
    <div className="flex h-full items-center justify-between p-7">
      {/* Left part of header */}
      <div className="inline-flex flex-col space-y-2">
        <span className="text-2xl font-bold">All your project:</span>
        <span className="text-lg text-gray-400">Total project: {3}</span>
      </div>
      {/* Right part of header */}
      <div className="flex space-x-3">
        <div>Buttons</div>
        <div>SearchBar</div>
      </div>
    </div>
  );
};

export default HomeHeader;
