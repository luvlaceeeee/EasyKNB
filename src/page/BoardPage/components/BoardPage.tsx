import { atomsWithQuery } from 'jotai-tanstack-query';
import { useParams } from 'react-router-dom';
import BoardHeader from '../../../modules/BoardHeader/components/BoardHeader';
import ContentLayout from '../../../shared/layout/ContentLayout';
import HeaderLayout from '../../../shared/layout/HeaderLayout';
import { userIdAtom } from '../../../shared/store/AuthStore';
import { IBoard } from '../../../shared/types/IBoard';
import BoardService from '../API/BoardService';

export const [board] = atomsWithQuery<IBoard>((get) => {
  const userId = get(userIdAtom);
  const { boardId } = useParams();

  return {
    queryKey: ['query-board', userId, boardId],
    queryFn: async () => BoardService.findBoardByUserId(userId, boardId),
  };
});

const BoardPage = () => {
  return (
    <ContentLayout>
      <HeaderLayout>
        <BoardHeader />
      </HeaderLayout>
    </ContentLayout>
  );
};

export default BoardPage;
