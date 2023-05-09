import { FiLogOut, FiMoon } from 'react-icons/fi';
import { useDarkMode } from '../hooks/useDarkMode';
import { SidebarProfile } from './sidebar-profile';
import { useGlobalStore } from '@/shared/store';
import { cn } from '@/shared/helpers';
import { Button } from '@/shared/ui/button';
import { Link } from 'react-router-dom';

export const SidebarFooter = () => {
  const [_, toggleTheme] = useDarkMode();
  const isSidebarOpen = useGlobalStore((s) => s.sidebarOpen);

  return (
    <>
      <div className="flex justify-center">
        <Button onClick={() => toggleTheme()} className="mb-2">
          <FiMoon size={20} />
        </Button>
      </div>
      <SidebarProfile />

      <Button asChild>
        <Link to="/">
          <FiLogOut size={20} className={cn(isSidebarOpen && 'mr-4')} />
          Log out
        </Link>
      </Button>
    </>
  );
};
