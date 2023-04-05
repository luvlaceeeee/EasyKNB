import { DefaultButton } from '@shared/UI';
import { FiPlusCircle } from 'react-icons/fi';
import { BoardColumnHeader } from './BoardColumnHeader';

export const BoardColumn = () => {
  return (
    <div className="flex w-72 shrink-0 flex-col space-y-3">
      <BoardColumnHeader title="To do" />
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
