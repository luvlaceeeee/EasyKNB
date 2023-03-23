import { atom, useAtom } from 'jotai';
import { GrLogout } from 'react-icons/gr';
import { sidebarButtons } from '../constans/sidebarButtons';
import SidebarButton from './SidebarButton';
import SidebarHeader from './SidebarHeader';

export const isSidebarOpen = atom(false);

const Sidebar = () => {
  const [isOpen] = useAtom(isSidebarOpen);
  return (
    <div
      className={`${
        isOpen ? 'w-60' : 'w-24'
      } absolute top-0 left-0 bottom-0 border-r-2 border-zinc-400 border-opacity-20 bg-white p-6 transition-all duration-500 ease-out`}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <SidebarHeader className={'pb-5'} />
          {sidebarButtons.map((button, i) => (
            <div className="pb-4">
              <SidebarButton
                key={i}
                title={button.title}
                icon={button.icon}
                link={button.link}
                className={button.className}
              />
            </div>
          ))}
        </div>
        <div>
          <SidebarButton
            title="Log out"
            icon={GrLogout}
            link="/"
            className="w-full justify-center border border-gray-200 bg-gray-100 hover:border-red-300 hover:bg-red-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
