import { HomeContent } from '@modules/HomeContent/components/HomeContent';
import { HomeHeader } from '@modules/HomeHeader/components/HomeHeader';
import { ContentLayout, HeaderLayout } from '@shared/layout';
import { userIdAtom } from '@shared/store';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { Suspense } from 'react';
import { HomeService } from '../API';
import { IHomeBoard } from '../types';
import { HomePageLoader } from './home-jf';

export const [allBoards] = atomsWithQuery<IHomeBoard[]>((get) => {
  const userId = get(userIdAtom);

  return {
    queryKey: ['query-boards', userId],
    queryFn: () => HomeService.findBoardsByUserId(userId),
  };
});

export const HomePage = () => {
  return (
    <ContentLayout>
      <Suspense fallback={<HomePageLoader />}>
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
      <div className="flex shrink-0 animate-pulse items-center justify-between">
        <div className="max-w-sm">
          <div className="mt-3 h-7 w-44 rounded-xl bg-gray-200 dark:bg-zinc-700"></div>
          <div className="mt-1 h-4 w-24 rounded-xl bg-gray-200 dark:bg-zinc-700"></div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="mt-2 h-12 w-32 rounded-xl bg-gray-200 dark:bg-zinc-700"></div>
          <div className="mt-2 h-12 w-44 rounded-xl bg-gray-200 dark:bg-zinc-700"></div>
        </div>
      </div>
    </HeaderLayout>
    <div className="flex animate-pulse space-x-5 p-7 pt-0">
      <div className="h-32 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
      <div className="h-32 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
      <div className="h-32 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
      <div className="h-32 w-72 shrink-0 rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
    </div>
  </div>
);
