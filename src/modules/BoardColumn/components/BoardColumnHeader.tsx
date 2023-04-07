import { IconButton } from '@shared/UI';
import { FC, useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BoardColumnDropDown } from './BoardColumnDropDown';

export const BoardColumnHeader: FC<{ title: string }> = ({ title }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative z-0 flex items-center justify-between dark:text-zinc-200">
      <span className="break-all text-xl font-bold">{title}</span>
      <div className="flex">
        {/* <IconButton
          icon={<FiPlusCircle size={20} />}
          handlerFn={() => {
            console.log('object');
          }}
        /> */}
        <IconButton
          icon={<FiMoreHorizontal size={20} />}
          handlerFn={() => {
            setOpen(!isOpen);
          }}
        />
        {isOpen && <BoardColumnDropDown setOpen={setOpen} />}
      </div>
    </div>
  );
};
