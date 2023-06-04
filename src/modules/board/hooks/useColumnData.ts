import { ColumnService } from '@/modules/column/services/column.service';
import { stringToNumber, throwError } from '@/shared/helpers';
import { useAuthStore } from '@/shared/store';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const useColumnData = (columnId: number) => {
  const userId = useAuthStore((state) => state.user.id);
  const boardId =
    stringToNumber(useParams().boardId) ??
    throwError(new Error('boardId is null'));

  return useQuery({
    queryKey: ['query-column', boardId, columnId],
    queryFn: () => ColumnService.findColumnById({ userId, boardId, columnId }),
  });
};
