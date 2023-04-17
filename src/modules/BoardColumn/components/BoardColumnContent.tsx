import { CreateTaskMenu, Task } from '@modules/Task';
import { ITask } from '@shared/types';
import { FC } from 'react';

export const BoardColumnContent: FC<{
  tasks: ITask[];
  isCreateMenuOpen: boolean;
  setCreateMenuOpen: (arg0: boolean) => void;
}> = ({ tasks, isCreateMenuOpen, setCreateMenuOpen }) => {
  return (
    <div className={`scrollbar space-y-4 overflow-auto pr-1`}>
      {tasks.length == 0 && (
        <div className="flex justify-center">
          <span className="font-bold text-zinc-600 dark:text-zinc-700">
            The column is empty
          </span>
        </div>
      )}

      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.text}
          description={task.description}
          makers={task.makers}
        />
      ))}

      {isCreateMenuOpen && (
        <CreateTaskMenu setCreateMenuOpen={setCreateMenuOpen} />
      )}
    </div>
  );
};
