import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContentLayout, HeaderLayout } from '@/shared/layout';
import { BoardHeader } from './components/board-header';
import { BoardContent } from './components/board-content';

export function BoardPage() {
  return (
    <ContentLayout>
      <Suspense fallback={<BoardPage.Skeleton />}>
        <HeaderLayout>
          <BoardHeader />
        </HeaderLayout>
        <BoardContent />
      </Suspense>
      <Outlet />
    </ContentLayout>
  );
}

BoardPage.Skeleton = function BoardPageSkeleton() {
  return (
    <div className="overflow-hidden">
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
    </div>
  );
};
