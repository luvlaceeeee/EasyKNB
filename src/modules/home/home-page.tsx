import { ContentLayout } from '@/shared/layout/content-layout';
import { HeaderLayout } from '@/shared/layout/header-layout';
import { Skeleton } from '@/shared/ui/skeleton';
import { Suspense } from 'react';
import { HomeContent } from './components/home-content';
import { HomeHeader } from './components/home-header';

export const HomePage = () => {
  return (
    <ContentLayout>
      <Suspense fallback={<HomePage.Skeleton />}>
        <HeaderLayout>
          <HomeHeader />
        </HeaderLayout>
        <HomeContent />
      </Suspense>
    </ContentLayout>
  );
};

HomePage.Skeleton = () => (
  <div className="overflow-hidden">
    <HeaderLayout>
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="mt-3 h-7 w-44 rounded-xl" />
          <Skeleton className="mt-1 h-4 w-24 rounded-xl" />
        </div>
        <div className="flex items-center space-x-3">
          <Skeleton className="mt-2 h-12 w-32 rounded-xl" />
        </div>
      </div>
    </HeaderLayout>
    <div className="flex animate-pulse space-x-5 p-7 pt-0">
      <Skeleton className="h-32 w-72 shrink-0 rounded-lg" />
      <Skeleton className="h-32 w-72 shrink-0 rounded-lg" />
      <Skeleton className="h-32 w-72 shrink-0 rounded-lg" />
      <Skeleton className="h-32 w-72 shrink-0 rounded-lg" />
    </div>
  </div>
);
