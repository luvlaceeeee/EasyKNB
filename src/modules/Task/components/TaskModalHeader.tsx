import { boardIdAtom } from '@page/BoardPage';
import { userIdAtom } from '@shared/store';
import { Button } from '@shared/UI';
import { atom, useAtom, useSetAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect, useRef, useState } from 'react';
import { FiEdit, FiX } from 'react-icons/fi';
import { useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { TaskService } from '../API';

export const taskIdAtom = atom<number | null>(null);
const [, renameTaskAtom] = atomsWithMutation((get) => ({
  mutationKey: ['rename-task'],
  mutationFn: ([title, desc]: string[]) =>
    TaskService.updateToTaskById(
      get(userIdAtom),
      get(boardIdAtom),
      get(taskIdAtom),
      title,
      desc
    ),
}));

export const TaskModalHeader: FC<{
  title: string;
  id: number;
  desc: string;
}> = ({ title, id, desc }) => {
  const setTaskId = useSetAtom(taskIdAtom);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [renameTaskState, mutate] = useAtom(renameTaskAtom);
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskTitleAfter, setTaskTitleAfter] = useState(title);
  const queryClient = useQueryClient();
  const { columnId } = useParams();

  useEffect(() => {
    if (renameTaskState.isSuccess) {
      queryClient.invalidateQueries([`query-column-${columnId}`]);
      //TODO fix this
      queryClient.invalidateQueries([`task-column`]);
      renameTaskState.reset();
    }
  }, [renameTaskState]);
  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        className="absolute top-0 right-0 z-10 m-1 p-1"
      >
        <FiX />
      </Button>
      <div className="relative z-0 px-6 pr-10">
        <FiEdit className="absolute top-2 -left-2" size={18} />
        <input
          type="text"
          onFocus={() => setTaskId(id)} //TODO Check this type questionX
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          maxLength={40}
          className="w-full cursor-default bg-transparent p-1 text-xl font-bold focus:bg-zinc-50 focus:dark:bg-zinc-800"
          onBlur={() => {
            if (!(taskTitle === taskTitleAfter)) {
              mutate([[taskTitle!.trim(), desc]]);
              setTaskTitleAfter(taskTitle);
            }
          }}
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              inputRef.current?.blur();
            }
          }}
        />
        <p className="pl-1.5 font-light text-zinc-400">In column</p>
      </div>
    </>
  );
};
