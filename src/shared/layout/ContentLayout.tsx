import { FC, PropsWithChildren } from 'react';
import { useGlobalStore } from '../store';
import { cn } from '../helpers';

export const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  const isSidebarOpen = useGlobalStore((state) => state.sidebarOpen);

  return (
    <div
      className={cn(
        'flex h-screen flex-col transition-all duration-500 ease-out dark:bg-zinc-900',
        isSidebarOpen ? 'pl-60' : 'pl-24'
      )}
    >
      {children}
    </div>
  );
};
