import { boardIdAtom } from '@page/BoardPage';
import { URLModal } from '@shared/UI';
import { stringToNumber } from '@shared/helpers';
import { userIdAtom } from '@shared/store';
import { ITask } from '@shared/types';
import { useAtomValue } from 'jotai';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { TaskService } from '../API';
import { TaskModalHeader } from './TaskModalHeader';
export const TaskModal = () => {
  const userId = useAtomValue(userIdAtom);
  const boardId = useAtomValue(boardIdAtom);
  const { columnId, taskId } = useParams();
  const { data, isLoading } = useQuery<ITask>(['task-column', taskId], () =>
    TaskService.findTaskById(
      userId,
      boardId,
      stringToNumber(columnId),
      stringToNumber(taskId)
    )
  );
  //TODO Add loader for task
  return (
    <URLModal>
      <div className="p-6">
        {!isLoading && (
          <TaskModalHeader title={data?.text} id={stringToNumber(taskId)} />
        )}
      </div>
    </URLModal>
  );
};
