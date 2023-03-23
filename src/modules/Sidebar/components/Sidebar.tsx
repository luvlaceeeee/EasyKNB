import { atom, useAtom } from 'jotai';

export const isSidebarOpen = atom(true);

const Sidebar = () => {
  const [isOpen, setOpen] = useAtom(isSidebarOpen);
  return (
    <div
      className={`${
        isOpen ? 'w-60' : 'w-28'
      } absolute top-0 left-0 bottom-0 bg-zinc-500 p-4 transition-all duration-300 ease-out`}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
