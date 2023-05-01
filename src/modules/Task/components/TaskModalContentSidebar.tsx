import { TaskModalButton } from '@shared/UI';
import { FiEdit2, FiTag, FiTrash, FiUser } from 'react-icons/fi';
export const TaskModalContentSidebar = () => {
  return (
    <div className="w-32">
      <p className="pb-1 text-sm text-zinc-400">Add to task</p>
      <div className="space-y-2">
        <TaskModalButton
          text="User"
          onClick={() => {
            console.log('first');
          }}
          className="w-full rounded-sm pl-1.5 text-sm"
        >
          <FiUser size={15} className="mr-1" />
        </TaskModalButton>
        <TaskModalButton
          text="Tag"
          onClick={() => {
            console.log('first');
          }}
          className="w-full rounded-sm pl-1.5 text-sm"
        >
          <FiTag size={15} className="mr-1" />
        </TaskModalButton>
      </div>
      <hr className="my-3 border-zinc-500" />
      <p className="pb-1 text-sm text-zinc-400">Actions</p>
      <div className="space-y-2">
        <TaskModalButton
          text="Delete"
          onClick={() => {
            console.log('first');
          }}
          className="w-full rounded-sm pl-1.5 text-sm"
        >
          <FiTrash size={15} className="mr-1" />
        </TaskModalButton>
        <TaskModalButton
          text="Rename"
          onClick={() => {
            console.log('first');
          }}
          className="w-full rounded-sm pl-1.5 text-sm"
        >
          <FiEdit2 size={15} className="mr-1" />
        </TaskModalButton>
      </div>
    </div>
  );
};
