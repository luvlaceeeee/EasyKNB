import { userAtom } from '@shared/store';
import { useAtom } from 'jotai';
import { isSidebarOpen } from '../store/sidebarStore';

export const SidebarProfile = () => {
  const [user] = useAtom(userAtom);
  const [isOpen] = useAtom(isSidebarOpen);
  return (
    <div className="mb-3 flex items-center justify-center rounded-lg p-2 transition-all duration-300 ease-out hover:bg-gray-200 dark:hover:bg-zinc-800">
      <img className="h-8 w-8 rounded-full" src={user.avatar} />
      <span
        className={`pl-3 font-bold duration-500 dark:text-zinc-200 ${
          !isOpen &&
          'hidden translate-x-28 overflow-hidden opacity-0 transition-all'
        } max-w-sm`}
      >
        {user.fullName}
      </span>
    </div>
  );
};
