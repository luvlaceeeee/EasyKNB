import { Button } from '@/shared/ui/button';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';

// const useCreateTask = (title: string, columnId: number) => {
//   const userId = useAuthStore((state) => state.user.id);
//   const boardId = stringToNumber(useParams().boardId);

//   return useMutation({
//     mutationKey: ['create-task', title],
//     mutationFn: () => ColumnService.createTaskByColumnID(
//       userId,
//       boardId,
//       columnId,
//       title
//     ),
//   });
// };

export const CreateTaskMenu = () => {
  const [title, setTitle] = useState('');

  // const [columnId, setColumnId] = useAtom(columnIdAtom);
  // const {isLoading,} = useCreateTask();

  return (
    <div
      className="pr-1"
      // onKeyDown={(e) => {
      //   if (e.key === 'Escape') {
      //     setCreateMenuOpen(false);
      //   }
      // }}
    >
      <input
        value={title}
        placeholder="Write task title"
        onChange={(e) => setTitle(e.target.value)}
        className="scrollbar mb-4 w-full rounded-lg border-2 border-zinc-200 bg-transparent p-4 pt-3 text-lg font-black outline-none placeholder:font-medium placeholder:opacity-40 dark:border-zinc-600 dark:text-white"
        autoFocus={true}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && title) {
            // mutate([title]);
          }
        }}
      />
      <div className="flex items-center space-x-7" id="create-task">
        <Button
        // onClick={() => mutate([title])}
        // disabled={createTaskState.isLoading ? true : title ? false : true}
        // loading={createTaskState.isLoading}
        >
          Create task
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            // setColumnId(null);
            // setTitle('');
            // setCreateMenuOpen(false);
          }}
        >
          <FiX size={20} />
        </Button>
      </div>
    </div>
  );
};
