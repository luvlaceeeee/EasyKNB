import { IconButton } from '@shared/UI';
import { FC } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

export const BoardColumnHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex items-center justify-between dark:text-zinc-200">
      <span className="break-words text-xl font-bold">{title}</span>
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
            console.log('object');
          }}
        />
      </div>
    </div>
  );
};
