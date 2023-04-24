import { boardIdAtom } from '@page/BoardPage';
import { URLModal } from '@shared/UI';
import { stringToNumber } from '@shared/helpers';
import { userIdAtom } from '@shared/store';
import { ITask } from '@shared/types';
import { useAtomValue } from 'jotai';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { TaskService } from '../API';
export const TaskModal = () => {
  const userId = useAtomValue(userIdAtom);
  const boardId = useAtomValue(boardIdAtom);
  const { columnId, taskId } = useParams();
  const { data } = useQuery<ITask>(['task-column', taskId], () =>
    TaskService.findTaskById(
      userId,
      boardId,
      stringToNumber(columnId),
      stringToNumber(taskId)
    )
  );
  return (
    <URLModal>
      <p>{data?.text}</p>
    </URLModal>
  );
};
