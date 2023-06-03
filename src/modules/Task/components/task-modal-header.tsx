import { useColumnData } from '@/modules/board/hooks';
import { stringToNumber, throwError } from '@/shared/helpers';
import { useQueryParams } from '@/shared/hooks';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { useMutation } from '@tanstack/react-query';
import { FC, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TaskService } from '../api';

interface TaskModalHeaderProps {
  title: string;
}

export const TaskModalHeader: FC<TaskModalHeaderProps> = ({ title }) => {
  const taskId =
    stringToNumber(useParams().taskId) ??
    throwError(new Error('task id is null'));

  const columnId =
    stringToNumber(useParams().columnId) ??
    throwError(new Error('column id is null'));
  const { data: column } = useColumnData(columnId);

  const [taskTitle, setTaskTitle] = useState(title);
  const [taskTitleAfter, setTaskTitleAfter] = useState(title);

  const inputRef = useRef<HTMLInputElement>(null);

  const [userId, boardId, queryClient] = useQueryParams();

  const { mutate } = useMutation({
    mutationKey: ['rename-task', taskId],
    mutationFn: () =>
      TaskService.renameTaskById({
        userId,
        boardId,
        taskId,
        title: taskTitle,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['query-column', boardId, columnId]);
      queryClient.invalidateQueries(['query-task', columnId, taskId]);
    },
  });

  return (
    <DialogHeader className="mb-2">
      <DialogTitle>
        <Input
          autoFocus={false}
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          maxLength={30}
          className="h-auto cursor-default rounded-md border-none px-0 text-xl font-bold focus:bg-secondary focus:px-1"
          onBlur={() => {
            if (taskTitle?.trim() !== taskTitleAfter?.trim()) {
              if (!taskTitle?.trim()) {
                setTaskTitle(taskTitleAfter);
                return;
              }
              mutate();
              setTaskTitleAfter(taskTitle);
            }
          }}
          onKeyDown={(e) => {
            e.key === 'Enter' && inputRef.current?.blur();
          }}
          ref={inputRef}
        />
      </DialogTitle>
      <DialogDescription>
        In column{' '}
        <span className="underline decoration-primary">{column?.title}</span>
      </DialogDescription>
    </DialogHeader>
  );
};
