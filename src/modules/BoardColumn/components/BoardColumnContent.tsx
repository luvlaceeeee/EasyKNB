import { Task } from '@modules/Task';
import { ITask } from '@shared/types';
import { FC } from 'react';

export const BoardColumnContent: FC<{ tasks: ITask[] }> = ({ tasks }) => {
  return (
    <div className={`scrollbar space-y-4 overflow-auto `}>
      <Task />
    </div>
  );
};
