import { Provider } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';
import HomeContent from '../../../modules/HomeContent/components/HomeContent';
import HomeHeader from '../../../modules/HomeHeader/components/HomeHeader';
import ContentLayout from '../../../shared/layout/ContentLayout';
import HeaderLayout from '../../../shared/layout/HeaderLayout';
import { userIdAtom } from '../../../shared/store/AuthStore';
import BoardService from '../API/HomeService';
import { IHomeBoard } from '../types/IHomeBoard';

export const [allBoards] = atomsWithQuery<IHomeBoard[]>((get) => ({
  queryKey: ['query-boards', get(userIdAtom)],
  queryFn: ({ queryKey: [, id] }) =>
    BoardService.findBoardByUserId(id as number),
}));

const HomePage = () => {
  return (
    <Provider>
      <ContentLayout>
        <HeaderLayout>
          <HomeHeader />
        </HeaderLayout>
        <HomeContent />
      </ContentLayout>
    </Provider>
  );
};

export default HomePage;
