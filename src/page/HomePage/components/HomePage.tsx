import { HomeContent } from '@modules/HomeContent/components/HomeContent';
import { HomeHeader } from '@modules/HomeHeader/components/HomeHeader';
import { ContentLayout, HeaderLayout } from '@shared/layout';
import { userIdAtom } from '@shared/store';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { Suspense } from 'react';
import { HomeService } from '../API';
import { IHomeBoard } from '../types';
import { HomePageLoader } from './HomePageLoader';

export const [allBoards] = atomsWithQuery<IHomeBoard[]>((get) => {
  const userId = get(userIdAtom);

  return {
    queryKey: ['query-boards', userId],
    queryFn: async () => HomeService.findBoardsByUserId(userId),
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
