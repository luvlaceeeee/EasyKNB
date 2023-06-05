import { ContentLayout } from '@/shared/layout/content-layout';
import { HeaderLayout } from '@/shared/layout/header-layout';
import { Skeleton } from '@/shared/ui/skeleton';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BoardContent } from './components/board-content';
import { BoardHeader } from './components/board-header';

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

BoardPage.Skeleton = () => {
  return (
    <div className="overflow-hidden">
      <HeaderLayout>
        <div className="flex items-center justify-between">
          <div>
            <Skeleton className="mt-3 h-7 w-44 rounded-xl" />
            <Skeleton className="mt-1 h-4 w-24 rounded-xl" />
          </div>
          <div className="flex items-center space-x-3">
            <Skeleton className="mt-2 h-10 w-32 rounded-xl" />
            <Skeleton className="mt-2 h-10 w-32 rounded-xl" />
            <Skeleton className="mt-2 h-10 w-32 rounded-xl" />
          </div>
        </div>
      </HeaderLayout>
    </div>
  );
};
