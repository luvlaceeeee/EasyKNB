import { stringToNumber, throwError } from '@/shared/helpers';
import { useQueryParams } from '@/shared/hooks';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { TaskService } from '../services';

export const useTaskData = () => {
  const [userId, boardId] = useQueryParams();
  const taskId =
    stringToNumber(useParams().taskId) ??
    throwError(new Error('task id is null'));
  const columnId =
    stringToNumber(useParams().columnId) ??
    throwError(new Error('column id is null'));

  return useQuery({
    queryKey: ['query-task', columnId, taskId],
    queryFn: () =>
      TaskService.findTaskById({ userId, boardId, columnId, taskId }),
    // suspense: false,
    refetchOnMount: 'always',
  });
};
