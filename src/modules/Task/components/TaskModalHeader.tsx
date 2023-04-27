import { boardIdAtom } from '@page/BoardPage';
import { IconButton } from '@shared/UI';
import { userIdAtom } from '@shared/store';
import { atom, useAtom, useSetAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect, useRef, useState } from 'react';
import { FiEdit, FiX } from 'react-icons/fi';
import { useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { TaskService } from '../API';

const taskIdAtom = atom<number | null>(null);
const [, renameTaskAtom] = atomsWithMutation((get) => ({
  mutationKey: ['rename-task'],
  mutationFn: (title: string) =>
    TaskService.renameTaskById(
      get(userIdAtom),
      get(boardIdAtom),
      get(taskIdAtom),
      title
    ),
}));

export const TaskModalHeader: FC<{ title?: string; id: number | null }> = ({
  title,
  id,
}) => {
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
      <IconButton
        icon={<FiX />}
        handlerFn={() => {
          navigate(-1);
        }}
        className="absolute top-0 right-0 m-1 p-1"
      />
      <div className="relative px-6 pr-10">
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
              mutate([taskTitle!.trim()]);
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
        <p className="pl-1.5 font-light text-zinc-400">
          In column <a></a>
        </p>
      </div>
    </>
  );
};
