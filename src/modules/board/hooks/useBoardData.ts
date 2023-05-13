import { useAuthStore } from '@/shared/store/auth.store';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { stringToNumber } from '../../../shared/helpers/stringToNumber.helper';
import { BoardService } from '../api/services/board.service';

export const useBoardData = () => {
  const userId = useAuthStore((state) => state.user.id);
  const boardId = stringToNumber(useParams().boardId);

  return useQuery({
    queryKey: ['query-board', userId, boardId],
    queryFn: () => BoardService.findBoardByUserId(userId, boardId!),
  });
};
