import { FC } from 'react';
import { FiEdit3, FiShuffle, FiTrash2 } from 'react-icons/fi';

export const BoardColumnDropDown: FC<{
  setOpen: (arg0: boolean) => void;
  setModalOpen: React.Dispatch<
    React.SetStateAction<{
      target: string;
      state: boolean;
    }>
  >;
  renameBoard: React.RefObject<HTMLInputElement>;
}> = ({ setOpen, renameBoard, setModalOpen }) => {
  return (
    <div
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
      className={`absolute top-10 right-0 w-44 rounded-lg border border-zinc-300 drop-shadow-lg dark:border-zinc-500`}
    >
      <ul>
        <li>
          <button
            onClick={() => {
              renameBoard.current.focus();
              setOpen(false);
            }}
            className="flex w-full items-center rounded-t-lg border-b border-zinc-500 bg-zinc-100 px-3 py-1.5 transition-all hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-900"
          >
            <FiEdit3 className="mr-2" />
            Rename column
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setModalOpen({ target: 'delete', state: true });
              setOpen(false);
            }}
            className="flex w-full items-center border-b border-zinc-500 bg-zinc-100 px-3 py-1.5 transition-all hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-900"
          >
            <FiTrash2 className="mr-2" />
            Delete column
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="flex w-full items-center rounded-b-lg bg-zinc-100 px-3 py-1.5 transition-all hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-900"
          >
            <FiShuffle className="mr-2" />
            Move column
          </button>
        </li>
      </ul>
    </div>
  );
};
