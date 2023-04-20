import { boardIdAtom } from '@page/BoardPage';
import { URLModal } from '@shared/UI';
import { userIdAtom } from '@shared/store';
import { ITask } from '@shared/types';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { TaskService } from '../API';
export const [taskAtom] = atomsWithQuery<ITask>((get) => {
  const userId = get(userIdAtom);
  const boardId = get(boardIdAtom);

  // const taskId = get(taskId);
  return {
    queryKey: ['query-task', userId, boardId, columnId, taskId],
    queryFn: () =>
      boardId
        ? TaskService.findTaskById(userId, boardId, columnId, taskId)
        : Promise.reject('Board id is null'),
  };
});
export const TaskModal = () => {
  return (
    <URLModal>
      <div>Header</div>
      <div>Content</div>
    </URLModal>
  );
};
