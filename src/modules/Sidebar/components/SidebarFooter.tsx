import { IconButton } from '@shared/UI/Buttons/IconButton';
import { useAtom } from 'jotai';
import { FiLogOut, FiMoon } from 'react-icons/fi';
import { useDarkMode } from '../hooks/useDarkMode';
import { isSidebarOpen } from '../store/sidebarStore';
import { SidebarButton } from './SidebarButton';
import { SidebarProfile } from './SidebarProfile';

export const SidebarFooter = () => {
  const [theme, setTheme] = useDarkMode();
  const [isOpen] = useAtom(isSidebarOpen);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <div className="flex justify-center">
        <IconButton
          icon={<FiMoon size={20} />}
          handlerFn={() => handleThemeSwitch()}
          className="mb-2"
        />
      </div>
      <SidebarProfile />
      <SidebarButton
        title="Log out"
        link="/"
        className="dark:hoover:bg-red-800 w-full justify-center border border-gray-200 bg-gray-100 hover:border-red-300 hover:bg-red-200 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-red-900 dark:hover:bg-red-800"
      >
        <FiLogOut size={20} className={`${isOpen ? 'mr-4' : ''}`} />
      </SidebarButton>
    </div>
  );
};
