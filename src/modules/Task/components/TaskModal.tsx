import { boardIdAtom } from '@page/BoardPage';
import { Spinner, URLModal } from '@shared/UI';
import { stringToNumber } from '@shared/helpers';
import { userIdAtom } from '@shared/store';
import { ITask } from '@shared/types';
import { useAtomValue } from 'jotai';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { TaskService } from '../API';
import { TaskModalContent } from './TaskModalContent';
import { TaskModalHeader } from './TaskModalHeader';
export const TaskModal = () => {
  const userId = useAtomValue(userIdAtom);
  const boardId = useAtomValue(boardIdAtom);
  const { columnId, taskId } = useParams();
  const { data, isLoading } = useQuery<ITask>(
    ['task-column', taskId],
    () =>
      TaskService.findTaskById(
        userId,
        boardId,
        stringToNumber(columnId),
        stringToNumber(taskId)
      ),
    {}
  );
  //TODO Add loader for task
  return (
    <URLModal>
      <div className="p-7 pr-5 pt-5">
        {!isLoading ? (
          <>
            {/* TODO Fix props(delete desc) */}
            <TaskModalHeader
              title={data!.text}
              desc={data!.description}
              id={data!.id}
            />
            <TaskModalContent task={data!} />
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </URLModal>
  );
};
