import { useAtom } from 'jotai';
import { FiHome } from 'react-icons/fi';
import { Outlet } from 'react-router-dom';
import { isSidebarOpen } from '../store/sidebarStore';
// import { SidebarButton } from './SidebarButton';
// import { SidebarFooter } from './SidebarFooter';
// import { SidebarHeader } from './SidebarHeader';
import { SidebarButton, SidebarFooter, SidebarHeader } from '../components';

export const Sidebar = () => {
  const [isOpen] = useAtom(isSidebarOpen);

  return (
    <>
      <div
        className={`${
          isOpen ? 'w-60' : 'w-24'
        } absolute top-0 left-0 bottom-0 border-r-2 border-zinc-400 border-opacity-20 bg-white p-6 transition-all duration-500 ease-out dark:border-zinc-700 dark:bg-zinc-900`}
      >
        <div className="flex h-full flex-col">
          <SidebarHeader className={'pb-5'} />

          <SidebarButton title="Home" link="/home" className="mb-auto">
            <FiHome size={23} className={`${isOpen ? 'mr-4' : ''}`} />
          </SidebarButton>

          <SidebarFooter />
        </div>
      </div>
      <Outlet />
    </>
  );
};
