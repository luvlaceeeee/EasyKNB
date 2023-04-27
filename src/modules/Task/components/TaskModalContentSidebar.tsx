import { TaskModalButton } from '@shared/UI';
import { FiEdit2, FiTag, FiTrash, FiUser } from 'react-icons/fi';
export const TaskModalContentSidebar = () => {
  return (
    <div>
      <p className="pb-1 text-sm text-zinc-400">Add to task</p>
      <div className="space-y-2">
        <TaskModalButton
          text="User"
          onClick={() => {
            console.log('first');
          }}
          className="rounded-sm text-sm"
        >
          <FiUser size={20} className="mr-2" />
        </TaskModalButton>
        <TaskModalButton
          text="Tag"
          onClick={() => {
            console.log('first');
          }}
          className="rounded-sm text-sm"
        >
          <FiTag size={20} className="mr-2" />
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
          className="rounded-sm text-sm"
        >
          <FiTrash size={18} className="mr-2" />
        </TaskModalButton>
        <TaskModalButton
          text="Rename"
          onClick={() => {
            console.log('first');
          }}
          className="rounded-sm text-sm"
        >
          <FiEdit2 size={18} className="mr-2" />
        </TaskModalButton>
      </div>
    </div>
  );
};
