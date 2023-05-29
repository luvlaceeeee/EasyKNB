import { cn } from '@/shared/helpers';
import { useAuthStore, useGlobalStore } from '@/shared/store';

export const SidebarProfile = () => {
  const user = useAuthStore((s) => s.user);
  const isOpen = useGlobalStore((s) => s.sidebarOpen);

  return (
    <div className="mb-3 flex items-center justify-center rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-zinc-800">
      <img className="h-8 w-8 rounded-full" src={user.avatar} alt="boba" />
      <span
        className={cn(
          'max-w-sm whitespace-pre pl-3 font-bold duration-500  dark:text-zinc-200',
          !isOpen && 'hidden translate-x-28 overflow-hidden opacity-0'
        )}
      >
        {user.fullName}
      </span>
    </div>
  );
};
