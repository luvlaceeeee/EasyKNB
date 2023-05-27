import { cn } from '@/shared/helpers';
import { FC } from 'react';

interface ISidebarProps {
  className?: string;
}

export const SidebarHeader: FC<ISidebarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-between text-lg',
        className
      )}
    >
      {/* <img className="h-8 w-8 rounded-full" src='logo' alt="avatar" /> */}
    </div>
  );
};
