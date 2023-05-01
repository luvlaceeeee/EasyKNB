import { TaskModalButton } from '@shared/UI';
import { userAtom } from '@shared/store';
import { ITask } from '@shared/types';
import { useAtomValue } from 'jotai';
import { FC } from 'react';
import { FiList } from 'react-icons/fi';
import { TaskModalContentDesc } from './TaskModalContentDesc';
import { TaskModalContentSidebar } from './TaskModalContentSidebar';
export const TaskModalContent: FC<{ task: ITask }> = ({ task }) => {
  const user = useAtomValue(userAtom);
  return (
    <div className="flex items-start pt-4">
      <div className="flex-grow space-y-5 pr-6">
        {/* user, tags block */}
        <div className="flex space-x-7 pl-7">
          <div>
            <p className="pb-2.5">Users</p>
            <div className="flex space-x-2">
              <img
                className="h-8 w-8 rounded-full"
                src={
                  'https://sun9-38.userapi.com/impg/RfiRyeg9jaA2mFWX3Jzf2qGktAzIakXk1CiIBw/9mmdR8ydxC0.jpg?size=564x563&quality=95&sign=133f3e0edd5cae865eb8903eae5b05fb&type=album'
                }
              />
            </div>
          </div>
          <div>
            <p>Tags</p>
          </div>
        </div>
        {/* desc block */}
        <TaskModalContentDesc
          title={task.text}
          desc={task.description}
          taskId={task.id}
        />
        {/* comments block */}
        <div className="relative pl-7">
          <FiList className="absolute top-1 -left-2" size={20} />
          <div className="flex justify-between  pb-4">
            <p className="text-lg">Actions</p>
            <div>
              <TaskModalButton
                text="Show details"
                onClick={() => {
                  console.log('first');
                }}
              />
            </div>
          </div>
          <div className="relative flex items-center">
            <img
              className="absolute -left-10 h-8 w-8 rounded-full"
              src={user.avatar}
            />
            <input className="w-full" />
          </div>
        </div>
      </div>
      <TaskModalContentSidebar />
    </div>
  );
};
