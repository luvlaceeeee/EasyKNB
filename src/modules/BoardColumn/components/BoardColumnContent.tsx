import { CreateTaskMenu, Task } from '@modules/Task';
import { ITask } from '@shared/types';
import React from 'react';

interface BoardColumnContentProps {
  tasks?: ITask[];
  isCreateMenuOpen: boolean;
  setCreateMenuOpen: (arg0: boolean) => void;
}

export const BoardColumnContent = React.forwardRef<
  HTMLDivElement,
  BoardColumnContentProps
>((props, ref) => {
  const { tasks, isCreateMenuOpen, setCreateMenuOpen } = props;
  return (
    <div
      className={`scrollbar space-y-4 overflow-auto scroll-smooth pr-1`}
      ref={ref}
    >
      {tasks?.length == 0 && (
        <div className="flex justify-center">
          <span className="font-bold text-zinc-600 dark:text-zinc-700">
            The column is empty
          </span>
        </div>
      )}

      {tasks?.map((task) => (
        <Task
          key={task.id}
          id={task.id}
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
});
