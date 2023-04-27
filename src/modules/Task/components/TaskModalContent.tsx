import { DefaultButton } from '@shared/UI';
import { ITask } from '@shared/types';
import { FC } from 'react';
import { FiAlignLeft, FiList } from 'react-icons/fi';
import { TaskModalContentSidebar } from './TaskModalContentSidebar';

export const TaskModalContent: FC<{ task: ITask }> = ({ task }) => {
  return (
    <div className="flex items-start pt-4">
      <div className="flex-grow space-y-5 pr-4">
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
        <div className="relative pl-7">
          <FiAlignLeft className="absolute top-1 -left-2" size={20} />
          <p className="pb-4 text-lg">Description</p>
          <textarea />
        </div>
        {/* comments block */}
        <div className="relative pl-7">
          <FiList className="absolute top-1 -left-2" size={20} />
          <div className="flex justify-between  pb-4">
            <p className="text-lg">Actions</p>
            <div>
              <DefaultButton
                text="Show details"
                onClick={() => {
                  console.log('first');
                }}
                className="text-sm"
              />
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="mr-2 h-8 w-8 rounded-full"
              src={
                'https://sun9-38.userapi.com/impg/RfiRyeg9jaA2mFWX3Jzf2qGktAzIakXk1CiIBw/9mmdR8ydxC0.jpg?size=564x563&quality=95&sign=133f3e0edd5cae865eb8903eae5b05fb&type=album'
              }
            />
            <input className="w-full" />
          </div>
        </div>
      </div>
      <TaskModalContentSidebar />
    </div>
  );
};
