import { throwError } from '@/shared/helpers';
import { stringToNumber } from '@/shared/helpers/stringToNumber.helper';
import { useAuthStore } from '@/shared/store';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { BoardService } from '../services/board.service';

export const useBoardData = () => {
  const userId = useAuthStore((state) => state.user.id);
  const boardId =
    stringToNumber(useParams().boardId) ??
    throwError(new Error('boardId is null'));

  return useQuery({
    queryKey: ['query-board', boardId],
    queryFn: () => BoardService.findBoardByUserId(userId, boardId),
  });
};
