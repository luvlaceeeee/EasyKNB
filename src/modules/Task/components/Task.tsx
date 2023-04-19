import { IconButton } from '@shared/UI';
import { IUser } from '@shared/types';
import { FC } from 'react';
import { FiTrash } from 'react-icons/fi';
import { TaskContent } from './TaskContent';
import { TaskFooter } from './TaskFooter';
import { TaskHeader } from './TaskHeader';

export const Task: FC<{
  title: string;
  description?: string;
  makers?: IUser[];
}> = ({ title, description, makers }) => {
  return (
    <div className="group relative rounded-lg border-2 border-zinc-200 p-4 pt-3 transition-all duration-300 hover:bg-gray-100 dark:border-zinc-600 dark:text-white dark:hover:bg-zinc-800">
      <div className="space-y-2">
        <TaskHeader title={title} />
        {description && <TaskContent desc={description} />}
        {makers && <TaskFooter makers={makers} />}
      </div>

      <IconButton
        icon={<FiTrash />}
        handlerFn={() => {
          console.log('object');
        }}
        className="invisible absolute top-0 right-0 opacity-0 group-hover:visible group-hover:opacity-100 "
      />
    </div>
  );
};
