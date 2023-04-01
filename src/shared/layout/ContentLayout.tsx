import { useAtom } from 'jotai';
import { FC, PropsWithChildren } from 'react';
import { isSidebarOpen } from '../../modules/Sidebar/store/sidebarStore';

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen] = useAtom(isSidebarOpen);
  return (
    <div
      className={`flex h-screen flex-col ${
        isOpen ? 'pl-60' : 'pl-24'
      } transition-all duration-500 ease-out dark:bg-zinc-900`}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
