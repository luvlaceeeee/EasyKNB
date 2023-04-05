import { Task } from '@modules/Task';
import { DefaultButton } from '@shared/UI';
import { IColumn } from '@shared/types';
import { FC } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { BoardColumnHeader } from './BoardColumnHeader';

export const BoardColumn: FC<{ column: IColumn }> = ({ column }) => {
  return (
    <div className="flex w-72 shrink-0 flex-col space-y-4">
      <BoardColumnHeader title={column.title} />
      {/* Tasks */}
      <div className="scrollbar max-h-[500px] space-y-4 overflow-auto pr-2 xl:max-h-[600px] 2xl:max-h-[650px]">
        <Task />
      </div>
      {/* Add tasks button */}
      {/* TODO fix dark mode text color on button */}
      <DefaultButton
        text="Add Task"
        onClick={() => {
          console.log('object');
        }}
        className=" bg-zinc-200 text-black outline-dashed outline-2 outline-offset-1 outline-zinc-300 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-white dark:outline-zinc-600 dark:hover:bg-zinc-700"
      >
        <FiPlusCircle size={20} className="mr-2" />
      </DefaultButton>
    </div>
  );
};
