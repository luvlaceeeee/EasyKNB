import { userAtom } from '@shared/store';
import { IUser } from '@shared/types';
import { useAtom } from 'jotai';
import { FC } from 'react';
import { TaskContent } from './TaskContent';
import { TaskFooter } from './TaskFooter';
import { TaskHeader } from './TaskHeader';

export const Task: FC<{
  title: string;
  description: string;
  makers: IUser[];
}> = () => {
  const [user] = useAtom(userAtom);
  return (
    <div className="flex w-full flex-col space-y-2 rounded-lg border-2 border-zinc-200 p-4 pt-3 transition-all hover:bg-gray-100 dark:border-zinc-600 dark:text-white dark:hover:bg-zinc-800">
      <TaskHeader title="Contact client for outline" />
      <TaskContent
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
      />
      <TaskFooter avatar={user.avatar} />
    </div>
  );
};
