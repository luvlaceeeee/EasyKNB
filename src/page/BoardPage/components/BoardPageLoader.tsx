import { HeaderLayout } from '@shared/layout';

export const BoardPageLoader = () => {
  return (
    <>
      <HeaderLayout>
        <div className="flex shrink-0 animate-pulse items-center justify-between">
          <div className="max-w-sm">
            <div className="mt-3 h-7 w-40 rounded-xl bg-gray-200 dark:bg-zinc-700"></div>
            <div className="mt-1 h-4 w-28 rounded-xl bg-gray-200 dark:bg-zinc-700"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="mt-2 h-12 w-32 rounded-xl bg-gray-200 dark:bg-zinc-700"></div>
            <div className="mt-2 h-12 w-32 rounded-xl bg-gray-200 dark:bg-zinc-700"></div>
            <div className="mt-2 h-12 w-32 rounded-xl bg-gray-200 dark:bg-zinc-700"></div>
          </div>
        </div>
      </HeaderLayout>
      <div className="flex animate-pulse space-x-5 p-7 pt-0">
        <div>
          <div className="mb-3 h-10 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
          <div className="mb-4 h-44 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
          <div className="h-14 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
        </div>
        <div>
          <div className="mb-3 h-10 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
          <div className="mb-4 h-44 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
          <div className="h-14 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
        </div>
        <div>
          <div className="mb-3 h-10 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
          <div className="mb-4 h-44 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
          <div className="h-14 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
        </div>
        <div>
          <div className="mb-3 h-10 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
          <div className="mb-4 h-44 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
          <div className="h-14 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
        </div>
        <div>
          <div className="mb-3 h-10 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
          <div className="mb-4 h-44 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
          <div className="h-14 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
        </div>
      </div>
    </>
  );
};
