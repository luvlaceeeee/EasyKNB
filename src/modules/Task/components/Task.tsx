import { userAtom } from '@shared/store';
import { useAtom } from 'jotai';

export const Task = () => {
  const [user] = useAtom(userAtom);
  return (
    <div className="flex w-full flex-col space-y-2 rounded-lg border-2 border-zinc-200 p-4 pt-3 dark:border-zinc-600 dark:text-white">
      <div className="flex justify-between">
        <span className="text-lg font-black">Contact client for outline</span>
      </div>
      <div>
        <span className="text-zinc-500">sdfasfd</span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <img className="h-7 w-7 rounded-full" src={user.avatar} />
        </div>
      </div>
    </div>
  );
};
