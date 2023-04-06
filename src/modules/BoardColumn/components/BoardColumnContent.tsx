import { Task } from '@modules/Task';
import { ITask } from '@shared/types';
import { FC } from 'react';

export const BoardColumnContent: FC<{ tasks: ITask[] }> = ({ tasks }) => {
  return (
    <div className={`scrollbar space-y-4 overflow-auto `}>
      {tasks.length == 0 && (
        <div className="flex justify-center">
          <span className="font-bold text-zinc-600 dark:text-zinc-700">
            The column is empty
          </span>
        </div>
      )}
      {tasks.map((task) => (
        <Task
          title={task.text}
          description={task.description}
          makers={task.makers}
        />
      ))}
    </div>
  );
};
