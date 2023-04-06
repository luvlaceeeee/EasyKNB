import { DefaultButton } from '@shared/UI';
import { FiPlusCircle } from 'react-icons/fi';

//TODO fix light mode text color on button
export const BoardColumnFooter = () => {
  return (
    <DefaultButton
      text="Add Task"
      onClick={() => {
        console.log('object');
      }}
      className=" bg-zinc-200 text-zinc-700 outline-dashed outline-2 outline-offset-1 outline-zinc-300 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-white dark:outline-zinc-600 dark:hover:bg-zinc-700"
    >
      <FiPlusCircle size={20} className="mr-2" />
    </DefaultButton>
  );
};
