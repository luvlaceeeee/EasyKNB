import { cn } from '@/shared/helpers';
import { FC } from 'react';
import { FiAlignJustify, FiAlignLeft } from 'react-icons/fi';
import { useGlobalStore } from '@/shared/store';
import { Button } from '@/shared/ui/button';

interface ISidebarProps {
  className?: string;
}

export const SidebarHeader: FC<ISidebarProps> = ({ className }) => {
  const [isOpen, setOpen] = useGlobalStore((s) => [
    s.sidebarOpen,
    s.updateSidebarOpen,
  ]);

  return (
    <div
      className={cn(
        'flex w-full items-center justify-between text-lg',
        className
      )}
    >
      <Button onClick={() => setOpen(!isOpen)}>
        {isOpen ? <FiAlignJustify size={20} /> : <FiAlignLeft size={20} />}
      </Button>
      <span
        className={cn(
          'font-bold transition-opacity duration-300 ease-out dark:text-zinc-200',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
      >
        Jirello
      </span>
    </div>
  );
};
