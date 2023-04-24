import { IconButton } from '@shared/UI';
import { IUser } from '@shared/types';
import { FC } from 'react';
import { FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TaskContent } from './TaskContent';
import { TaskFooter } from './TaskFooter';
import { TaskHeader } from './TaskHeader';

export const Task: FC<{
  title: string;
  id: number;
  columnId: number;
  description?: string;
  makers?: IUser[];
}> = ({ title, columnId, description, makers, id }) => {
  return (
    <div className="group relative">
      <IconButton
        icon={<FiTrash />}
        handlerFn={() => {
          console.log('first');
        }}
        className="invisible absolute top-0 right-0 opacity-0 hover:bg-transparent hover:text-red-500 group-hover:visible group-hover:opacity-100 dark:hover:bg-opacity-0 dark:hover:text-red-700"
      />
      <Link to={`c/${columnId}/${id}`} className="block">
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
