import { boardIdAtom } from '@page/BoardPage';
import { TaskModalButton } from '@shared/UI';
import { userIdAtom } from '@shared/store';
import { useAtom, useSetAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect, useState } from 'react';
import { FiAlignLeft } from 'react-icons/fi';
import { useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { TaskService } from '../API';
import { taskIdAtom } from './TaskModalHeader';
const [, addDescToTaskByIdAtom] = atomsWithMutation((get) => ({
  mutationKey: ['add-desc-task'],
  mutationFn: ([title, desc]: string[]) =>
    TaskService.updateToTaskById(
      get(userIdAtom),
      get(boardIdAtom),
      get(taskIdAtom),
      title,
      desc
    ),
}));

export const TaskModalContentDesc: FC<{
  title: string;
  desc?: string;
  taskId: number;
}> = ({ title, desc, taskId }) => {
  const [descValue, setDescValue] = useState(desc);
  const setTaskId = useSetAtom(taskIdAtom);
  const [addDescState, mutate] = useAtom(addDescToTaskByIdAtom);
  const queryClient = useQueryClient();
  const { columnId } = useParams();

  useEffect(() => {
    if (addDescState.isSuccess) {
      queryClient.invalidateQueries([`query-column-${columnId}`]);
      queryClient.invalidateQueries([`task-column`]);
      addDescState.reset();
    }
  }, [addDescState]);
  return (
    <div className="relative pl-7">
      <FiAlignLeft className="absolute top-1 -left-2" size={20} />
      <form>
        <p className="pb-4 text-lg">Description</p>
        <textarea
          rows={4}
          onFocus={() => {
            setTaskId(taskId);
            console.log(taskId);
          }}
          value={descValue}
          onChange={(e) => {
            setDescValue(e.target.value);
          }}
          className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:placeholder-gray-400"
          placeholder="Write your description here..."
        />
        <div
          className={`${
            descValue?.trim() !== desc && descValue?.trim()
              ? 'visible opacity-100'
              : 'invisible opacity-0'
          } flex space-x-3 pt-3 transition-all`}
        >
          <TaskModalButton
            text="Submit"
            onClick={(e) => {
              e.preventDefault();
              mutate([[title, descValue!.trim()]]);
            }}
          />
          <TaskModalButton
            text="Cancel"
            onClick={(e) => {
              e.preventDefault();
              setDescValue(desc);
            }}
            className="w-fit opacity-70"
          />
        </div>
      </form>
    </div>
  );
};
