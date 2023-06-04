import { IColumn } from '@/shared/types';
import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useColumnData } from '../hooks';
import { BoardColumnContent } from './column/board-column-content';
import { BoardColumnHeader } from './column/board-column-header';

export const BoardColumn: FC<{ column: IColumn; index: number }> = ({
  column,
  index,
}) => {
  const { data } = useColumnData(column.id);

  return (
    <Draggable draggableId={column.title} index={index}>
      {(provided) => (
        <div
          className="flex h-full w-72 shrink-0 flex-col space-y-4"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <BoardColumnHeader
            {...provided.dragHandleProps}
            title={data ? data.title : ''}
            columnId={data ? data.id : 0}
            countTasks={column.tasks.length}
          />
          <BoardColumnContent
            columnId={data ? data.id : 0}
            tasks={data ? data.tasks : []}
          />
        </div>
      )}
    </Draggable>
  );
};
