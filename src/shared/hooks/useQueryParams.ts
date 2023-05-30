import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { stringToNumber, throwError } from '../helpers';
import { useAuthStore } from '../store';

export const useQueryParams = () => {
  const userId = useAuthStore((state) => state.user.id);
  const boardId =
    stringToNumber(useParams().boardId) ??
    throwError(new Error('board id is null'));
  const queryClient = useQueryClient();

  return [userId, boardId, queryClient] as const;
};
