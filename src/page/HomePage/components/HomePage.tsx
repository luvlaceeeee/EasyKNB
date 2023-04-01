import { atomsWithQuery } from 'jotai-tanstack-query';
import { Suspense } from 'react';
import HomeContent from '../../../modules/HomeContent/components/HomeContent';
import HomeHeader from '../../../modules/HomeHeader/components/HomeHeader';
import ContentLayout from '../../../shared/layout/ContentLayout';
import HeaderLayout1 from '../../../shared/layout/HeaderLayout';
import { userIdAtom } from '../../../shared/store/AuthStore';
import BoardService from '../API/HomeService';
import { IHomeBoard } from '../types/IHomeBoard';
import HomePageLoader from './HomePageLoader';

export const [allBoards] = atomsWithQuery<IHomeBoard[]>((get) => {
  const userId = get(userIdAtom);

  return {
    queryKey: ['query-boards', userId],
    queryFn: async () => BoardService.findBoardByUserId(userId),
  };
});

const HomePage = () => {
  return (
    <ContentLayout>
      <Suspense fallback={<HomePageLoader />}>
        <HeaderLayout1>
          <HomeHeader />
        </HeaderLayout1>
        <HomeContent />
      </Suspense>
    </ContentLayout>
  );
};

export default HomePage;
