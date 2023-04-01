import { useAtom } from 'jotai';
import { GrHomeRounded, GrInbox, GrLogout, GrMoon } from 'react-icons/gr';
import { Outlet } from 'react-router-dom';
import IconButton from '../../../shared/UI/Buttons/IconButton';
import useDarkMode from '../hooks/useDarkMode';
import { isSidebarOpen } from '../store/sidebarStore';
import SidebarButton from './SidebarButton';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {
  const [isOpen] = useAtom(isSidebarOpen);
  const [theme, setTheme] = useDarkMode();

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div
        className={`${
          isOpen ? 'w-60' : 'w-24'
        } absolute top-0 left-0 bottom-0 border-r-2 border-zinc-400 border-opacity-20 bg-white p-6 transition-all duration-500 ease-out dark:bg-zinc-800`}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <SidebarHeader className={'pb-5'} />
            {[
              { title: 'Home', icon: GrHomeRounded, link: '/home' },
              { title: 'Inbox', icon: GrInbox, link: '/' },
            ].map((button, i) => (
              <div className="pb-4" key={i}>
                <SidebarButton title={button.title} link={button.link}>
                  <button.icon
                    size={20}
                    className={`${isOpen ? 'mr-4' : ''}`}
                  />
                </SidebarButton>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-center">
              <IconButton
                icon={<GrMoon size={20} />}
                handlerFn={() => handleThemeSwitch()}
                className="mb-2"
              />
            </div>
            <SidebarButton
              title="Log out"
              link="/"
              className="w-full justify-center border border-gray-200 bg-gray-100 hover:border-red-300 hover:bg-red-200"
            >
              <GrLogout size={20} className={`${isOpen ? 'mr-4' : ''}`} />
            </SidebarButton>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
