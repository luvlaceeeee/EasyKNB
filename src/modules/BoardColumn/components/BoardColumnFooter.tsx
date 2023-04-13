import { boardIdAtom } from '@page/BoardPage/components/BoardPage';
import { DefaultButton, IconButton } from '@shared/UI';
import { userIdAtom } from '@shared/store/AuthStore';
import { useAtom, useSetAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect, useState } from 'react';
import { FiPlusCircle, FiX } from 'react-icons/fi';
import { useQueryClient } from 'react-query';
import { ColumnService } from '../API';
import { columnIdAtom } from './BoardColumnHeader';
// TODO fix light mode text color on button
// TODO add event listener for create task
// TODO create component for create tas menu

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

export const BoardColumnFooter: FC<{ id: number }> = ({ id }) => {
  const [isCreateInputOpen, setCreateInputOpen] = useState(false);
  const [title, setTitle] = useState('');

  const [createTaskState, mutate] = useAtom(createTaskAtom);
  const setColumnId = useSetAtom(columnIdAtom);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (createTaskState.isSuccess) {
      queryClient.invalidateQueries(['query-column']);
      setCreateInputOpen(false);
      setTitle('');
      //TODO fix this
      createTaskState.reset();
    }
  }, [createTaskState]);

  return (
    <>
      {isCreateInputOpen ? (
        <div className="pr-1">
          <input
            value={title}
            placeholder="Write task title"
            onChange={(e) => setTitle(e.target.value)}
            className="scrollbar mb-4 w-full rounded-lg border-2 border-zinc-200 bg-transparent p-4 pt-3 text-lg font-black outline-none dark:border-zinc-600 dark:text-white"
            autoFocus={true}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && title) {
                e.preventDefault();
                mutate([title]);
                // setCreateInputOpen(false);
                // setTitle('');
              }
            }}
          />
          <div className="flex items-center space-x-7">
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
                setCreateInputOpen(false);
              }}
            />
          </div>
        </div>
      ) : (
        <DefaultButton
          text="Add Task"
          onClick={() => {
            setColumnId(id);
            setCreateInputOpen(true);
          }}
          className=" bg-zinc-200 text-zinc-700 outline-dashed outline-2 outline-offset-1 outline-zinc-300 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-white dark:outline-zinc-600 dark:hover:bg-zinc-700"
        >
          <FiPlusCircle size={20} className="mr-2" />
        </DefaultButton>
      )}
    </>
  );
};
