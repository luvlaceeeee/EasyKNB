import { IconButton } from '@shared/UI/Buttons/IconButton';
import { FC } from 'react';
import { FiX } from 'react-icons/fi';

export const ModalHeader: FC<{
  setOpen: (arg0: boolean) => void;
  title: string;
}> = ({ setOpen, title }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold dark:text-zinc-200">{title}</span>
        <IconButton icon={<FiX />} handlerFn={() => setOpen(false)} />
      </div>
    </>
  );
};
