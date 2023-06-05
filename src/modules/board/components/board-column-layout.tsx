import { FC, PropsWithChildren } from 'react';
import { Droppable } from 'react-beautiful-dnd';

export const BoardColumnLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Droppable droppableId="columns" direction="horizontal" type="column">
      {(provided) => (
        <div
          className="scrollbar flex flex-1 items-start overflow-y-hidden p-7 pl-0 pb-5 pt-0"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
