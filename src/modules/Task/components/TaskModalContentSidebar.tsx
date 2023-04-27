import { DefaultButton } from '@shared/UI';
import { FiTag, FiUser } from 'react-icons/fi';
export const TaskModalContentSidebar = () => {
  return (
    <div>
      <p className="pb-1 text-sm text-zinc-400">Add to task</p>
      <div className="space-y-2">
        <DefaultButton
          text="User"
          onClick={() => {
            console.log('first');
          }}
          className="rounded-sm text-sm"
        >
          <FiUser size={20} className="mr-2" />
        </DefaultButton>
        <DefaultButton
          text="Tag"
          onClick={() => {
            console.log('first');
          }}
          className="rounded-sm text-sm"
        >
          <FiTag size={20} className="mr-2" />
        </DefaultButton>
      </div>
    </div>
  );
};
