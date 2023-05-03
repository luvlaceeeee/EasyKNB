import { boardIdAtom } from '@page/BoardPage';
import { userIdAtom } from '@shared/store';
import { IUser } from '@shared/types';
import { Button } from '@shared/UI';
import { useAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect } from 'react';
import { FiTrash } from 'react-icons/fi';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { TaskService } from '../API';
import { TaskContent } from './TaskContent';
import { TaskFooter } from './TaskFooter';
import { TaskHeader } from './TaskHeader';
const [, deleteTaskByIdAtom] = atomsWithMutation((get) => ({
  mutationKey: ['add-desc-task'],
  mutationFn: ([taskId, columnId]: number[]) =>
    TaskService.deleteTaskById(
      get(userIdAtom),
      get(boardIdAtom),
      taskId,
      columnId
    ),
}));

export const Task: FC<{
  title: string;
  taskId: number;
  columnId: number;
  description?: string;
  makers?: IUser[];
}> = ({ title, columnId, description, makers, taskId }) => {
  const queryClient = useQueryClient();
  const [deleteTaskState, mutate] = useAtom(deleteTaskByIdAtom);

  useEffect(() => {
    if (deleteTaskState.isSuccess) {
      queryClient.invalidateQueries([`query-column-${columnId}`]);
      deleteTaskState.reset();
    }
  }, [deleteTaskState]);

  return (
    <div
      className={`group relative ${
        deleteTaskState.isLoading ? 'opacity-70' : ''
      }`}
    >
      <Button
        variant="flat"
        onClick={() => mutate([[taskId, columnId]])}
        className="invisible absolute top-0 right-0 opacity-0 hover:bg-transparent hover:text-red-500 group-hover:visible group-hover:opacity-100 dark:hover:bg-opacity-0 dark:hover:text-red-700"
      >
        <FiTrash />
      </Button>
      <Link to={`c/${columnId}/${taskId}`} className="block">
        <div className="z-0 rounded-lg border-2 border-zinc-200 p-4 pt-3 transition-all duration-300 hover:bg-gray-100 dark:border-zinc-600 dark:text-white dark:hover:bg-zinc-800">
          <div className="space-y-2">
            <TaskHeader title={title} />
            {description && <TaskContent desc={description} />}
            {makers && <TaskFooter makers={makers} />}
          </div>
        </div>
      </Link>
    </div>
  );
};
