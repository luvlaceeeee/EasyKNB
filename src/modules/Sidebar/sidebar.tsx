import { useGlobalStore } from '@/shared/store';
import { Button } from '@/shared/ui/button';
import { FiHome } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';
import { SidebarFooter } from './components/sidebar-footer';
import { SidebarHeader } from './components/sidebar-header';

export const Sidebar = () => {
  const isOpen = useGlobalStore((s) => s.sidebarOpen);

  return (
    <>
      <div
        className={`${
          isOpen ? 'w-60' : 'w-24'
        } absolute top-0 left-0 bottom-0 border-r-2 border-zinc-400 border-opacity-20 bg-white p-6 transition-all duration-500 ease-out dark:border-zinc-700 dark:bg-zinc-900`}
      >
        <div className="flex h-full flex-col">
          <SidebarHeader className={'pb-5'} />

          <Button asChild>
            <Link to="/home">
              <FiHome size={23} className={`${isOpen ? 'mr-4' : ''}`} />
              Home
            </Link>
          </Button>

          <SidebarFooter />
        </div>
      </div>
      <Outlet />
    </>
  );
};
