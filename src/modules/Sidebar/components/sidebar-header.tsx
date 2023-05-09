import { cn } from '@shared/helpers';
import { Button } from '@shared/UI';
import { useAtom } from 'jotai';
import { FC } from 'react';
import { FiAlignJustify, FiAlignLeft } from 'react-icons/fi';
import { isSidebarOpen } from '../store/sidebarStore';

interface ISidebarProps {
  className?: string;
}

export const SidebarHeader: FC<ISidebarProps> = ({ className }) => {
  const [isOpen, setOpen] = useAtom(isSidebarOpen);

  return (
    <div
      className={cn(
        'flex w-full items-center justify-between text-lg',
        className
      )}
    >
      <Button variant="flat" onClick={() => setOpen(!isOpen)}>
        {isOpen ? <FiAlignJustify size={20} /> : <FiAlignLeft size={20} />}
      </Button>
      <span
        className={`${
          isOpen ? 'opacity-100' : 'opacity-0'
        } font-bold transition-opacity duration-300 ease-out dark:text-zinc-200`}
      >
        Jirello
      </span>
    </div>
  );
};
