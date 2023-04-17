import { DefaultButton } from '@shared/UI';
import { useSetAtom } from 'jotai';
import { FC } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { columnIdAtom } from './BoardColumnHeader';
// TODO fix light mode text color on button
// TODO add event listener for create task
// TODO create component for create tas menu

export const BoardColumnFooter: FC<{
  id: number;
  setCreateMenuOpen: () => void;
  isCreateMenuOpen: boolean;
}> = ({ id, setCreateMenuOpen, isCreateMenuOpen }) => {
  const setColumnId = useSetAtom(columnIdAtom);
  return (
    <>
      {!isCreateMenuOpen && (
        <DefaultButton
          text="Add Task"
          onClick={() => {
            setColumnId(id);
            setCreateMenuOpen();
          }}
          className=" bg-zinc-200 text-zinc-700 outline-dashed outline-2 outline-offset-1 outline-zinc-300 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-white dark:outline-zinc-600 dark:hover:bg-zinc-700"
        >
          <FiPlusCircle size={20} className="mr-2" />
        </DefaultButton>
      )}
    </>
  );
};
