import { IUser } from '@shared/types';
import { FC } from 'react';
import { TaskContent } from './TaskContent';
import { TaskFooter } from './TaskFooter';
import { TaskHeader } from './TaskHeader';

export const Task: FC<{
  title: string;
  description?: string;
  makers?: IUser[];
}> = ({ title, description, makers }) => {
  return (
    <div className="flex w-full flex-col space-y-2 rounded-lg border-2 border-zinc-200 p-4 pt-3 transition-all hover:bg-gray-100 dark:border-zinc-600 dark:text-white dark:hover:bg-zinc-800">
      <TaskHeader title={title} />
      {description && <TaskContent desc={description} />}
      {makers && <TaskFooter makers={makers} />}
    </div>
  );
};
