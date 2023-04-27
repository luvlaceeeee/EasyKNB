import { ColumnService, columnIdAtom } from '@modules/BoardColumn';
import { boardIdAtom } from '@page/BoardPage/components/BoardPage';
import { DefaultButton, IconButton } from '@shared/UI';
import { userIdAtom } from '@shared/store/AuthStore';
import { useAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useQueryClient } from 'react-query';

const [, createTaskAtom] = atomsWithMutation((get) => ({
  mutationKey: ['create-task'],
  mutationFn: (title: string) =>
    ColumnService.createTaskByColumnID(
      get(userIdAtom),
      get(boardIdAtom),
      get(columnIdAtom),
      title
    ),
}));

export const CreateTaskMenu: FC<{
  setCreateMenuOpen: (arg0: boolean) => void;
}> = ({ setCreateMenuOpen }) => {
  const [title, setTitle] = useState('');

  const [createTaskState, mutate] = useAtom(createTaskAtom);
  const [columnId, setColumnId] = useAtom(columnIdAtom);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (createTaskState.isSuccess) {
      queryClient.invalidateQueries([`query-column-${columnId}`]);
      setCreateMenuOpen(false);
      setTitle('');
      //TODO fix this
      createTaskState.reset();
    }
  }, [createTaskState]);

  return (
    <div
      className="pr-1"
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setCreateMenuOpen(false);
        }
      }}
    >
      <input
        value={title}
        placeholder="Write task title"
        onChange={(e) => setTitle(e.target.value)}
        className="scrollbar mb-4 w-full rounded-lg border-2 border-zinc-200 bg-transparent p-4 pt-3 text-lg font-black outline-none placeholder:font-medium placeholder:opacity-40 dark:border-zinc-600 dark:text-white"
        autoFocus={true}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && title) {
            mutate([title]);
            // setCreateInputOpen(false);
            // setTitle('');
          }
        }}
      />
      <div className="flex items-center space-x-7" id="create-task">
        <DefaultButton
          text="Create task"
          onClick={() => {
            mutate([title]);
            // setCreateInputOpen(false);
            // setTitle('');
          }}
          disabled={createTaskState.isLoading ? true : title ? false : true}
          isLoading={createTaskState.isLoading}
        />
        <IconButton
          icon={<FiX size={20} />}
          handlerFn={() => {
            setColumnId(null);
            setTitle('');
            setCreateMenuOpen(false);
          }}
        />
      </div>
    </div>
  );
};
