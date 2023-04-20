import { CreateTaskMenu, Task } from '@modules/Task';
import { ITask } from '@shared/types';
import React from 'react';

interface BoardColumnContentProps {
  tasks?: ITask[];
  columnId?: number;
  isCreateMenuOpen: boolean;
  setCreateMenuOpen: (arg0: boolean) => void;
}

export const BoardColumnContent = React.forwardRef<
  HTMLDivElement,
  BoardColumnContentProps
>((props, ref) => {
  const { tasks, columnId, isCreateMenuOpen, setCreateMenuOpen } = props;
  return (
    <div
      className={`scrollbar space-y-4 overflow-auto scroll-smooth pr-1`}
      ref={ref}
    >
      {tasks?.length == 0 && (
        <p className="text-center font-bold text-zinc-300 dark:text-zinc-700">
          The column is empty
        </p>
      )}

      {tasks?.map((task) => (
        <Task
          columnId={columnId!}
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
