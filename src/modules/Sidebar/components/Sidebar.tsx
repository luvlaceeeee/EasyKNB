import { atom, useAtom } from 'jotai';
import SidebarHeader from './SidebarHeader';

export const isSidebarOpen = atom(false);

const Sidebar = () => {
  const [isOpen] = useAtom(isSidebarOpen);
  return (
    <div
      className={`${
        isOpen ? 'w-60' : 'w-28'
      } absolute top-0 left-0 bottom-0 border-r-2 border-zinc-400 border-opacity-20 bg-white p-6 transition-all duration-500 ease-out`}
    >
      <SidebarHeader />
    </div>
  );
};

export default Sidebar;
