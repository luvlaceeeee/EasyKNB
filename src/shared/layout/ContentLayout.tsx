import { useAtom } from 'jotai';
import { FC } from 'react';
import { isSidebarOpen } from '../../modules/Sidebar/components/Sidebar';
import { LayoutProps } from './layoutTypes';

const ContentLayout: FC<LayoutProps> = ({ children }) => {
  const [isOpen] = useAtom(isSidebarOpen);
  return (
    <div
      className={`flex h-screen flex-col ${
        isOpen ? 'pl-60' : 'pl-24'
      } transition-all duration-500 ease-out`}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
