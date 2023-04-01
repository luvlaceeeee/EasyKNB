import HeaderLayout from '../../../shared/layout/HeaderLayout';

const HomePageLoader = () => {
  return (
    <>
      <HeaderLayout>
        <div className="flex animate-pulse items-center justify-between">
          <div className="max-w-sm">
            <div className="mt-3 h-7 w-44 rounded-xl bg-gray-200"></div>
            <div className="mt-1 h-4 w-24 rounded-xl bg-gray-200"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="mt-2 h-12 w-32 rounded-xl bg-gray-200"></div>
            <div className="mt-2 h-12 w-44 rounded-xl bg-gray-200"></div>
          </div>
        </div>
      </HeaderLayout>
      <div className="flex animate-pulse space-x-5 p-7 pt-0">
        <div className="h-32 w-72 rounded-lg bg-gray-200"></div>
        <div className="h-32 w-72 rounded-lg bg-gray-200"></div>
        <div className="h-32 w-72 rounded-lg bg-gray-200"></div>
        <div className="h-32 w-72 rounded-lg bg-gray-200"></div>
      </div>
    </>
  );
};

export default HomePageLoader;
