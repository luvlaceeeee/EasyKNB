import { useAuthStore } from '@/shared/store';
import { stringToNumber } from '@/shared/helpers';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { BoardService } from '../api/services/board.service';

export const useBoardData = () => {
  const userId = useAuthStore((state) => state.user.id);
  const boardId = stringToNumber(useParams().boardId);

  return useQuery({
    queryKey: ['query-board', userId, boardId],
    queryFn: () => BoardService.findBoardByUserId(userId, boardId),
  });
};
