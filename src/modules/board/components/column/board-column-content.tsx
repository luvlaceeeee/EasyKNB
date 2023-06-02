import { CreateTaskMenu } from '@/modules/task/components/create-task-menu';
import { Task } from '@/modules/task/task';
import { ITask } from '@/shared/types';
import { Button } from '@/shared/ui/button';
import { PlusCircle } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

// type State = {
//   tasks: ITask[];
// };

// export enum ActionKind {
//   createTask = 'createTask',
// }

// export type Action = {
//   type: ActionKind;
//   task: ITask;
// };

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case 'createTask': {
//       return { tasks: [...state.tasks, action.task] };
//     }
//   }
//   throw Error('Unknown action: ' + action.type);
// }

interface BoardColumnContentProps {
  tasks: ITask[];
  columnId: number;
}

export const BoardColumnContent = React.forwardRef<
  HTMLDivElement,
  BoardColumnContentProps
>(({ tasks, columnId, ...props }, ref) => {
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const setCreateMenuOpenWithScroll = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsCreateMenuOpen(true);
  };

  // const [state, dispatch] = useReducer(reducer, { tasks });

  return (
    <>
      <Droppable droppableId={`c-${columnId}`} direction="vertical" type="task">
        {(provided) => (
          <div
            className="scrollbar overflow-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div
              className={`space-y-4 pr-1`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={`${task.id}`}
                  index={index}
                >
                  {(provided) => (
                    <span
                      className="block"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Task
                        columnId={columnId}
                        key={task.id}
                        taskId={task.id}
                        title={task.text}
                        description={task.description}
                        makers={task.makers}
                      />
                    </span>
                  )}
                </Draggable>
              ))}
              {isCreateMenuOpen && (
                <CreateTaskMenu
                  setCreateMenuOpen={setIsCreateMenuOpen}
                  columnId={columnId}
                  // dispatch={dispatch}
                />
              )}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {!isCreateMenuOpen && (
        <Button
          variant={'secondary'}
          className="w-full py-5"
          onClick={setCreateMenuOpenWithScroll}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Create task
        </Button>
      )}
    </>
  );
});
