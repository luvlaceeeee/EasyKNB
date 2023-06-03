import { stringToNumber, throwError } from '@/shared/helpers';
import { useQueryParams } from '@/shared/hooks';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { TaskService } from '../api';

export const useTaskData = () => {
  const taskId =
    stringToNumber(useParams().taskId) ??
    throwError(new Error('task id is null'));
  const columnId =
    stringToNumber(useParams().columnId) ??
    throwError(new Error('column id is null'));
  const [userId, boardId] = useQueryParams();

  return useQuery({
    queryKey: ['query-task', columnId, taskId],
    queryFn: () =>
      TaskService.findTaskById({ userId, boardId, columnId, taskId }),
    suspense: false,
  });
};
