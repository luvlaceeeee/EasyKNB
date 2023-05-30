import { ColumnService } from '@/modules/board/services';
import { stringToNumber, throwError } from '@/shared/helpers';
import { useAuthStore } from '@/shared/store';
import { Button } from '@/shared/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { X } from 'lucide-react';
import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

interface CreateTaskMenuProps {
  columnId: number;
  setCreateMenuOpen: React.Dispatch<boolean>;
}

export const CreateTaskMenu: FC<CreateTaskMenuProps> = ({
  setCreateMenuOpen,
  columnId,
}) => {
  const [title, setTitle] = useState('');

  const closeHandler = () => {
    setTitle('');
    setCreateMenuOpen(false);
  };

  //TODO Create custom hook for this data
  //TODO Check how close menu after invalidate query is done
  const userId = useAuthStore((state) => state.user.id);
  const boardId =
    stringToNumber(useParams().boardId) ??
    throwError(new Error('boardId is null'));
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationKey: ['create-task', columnId],
    mutationFn: () =>
      ColumnService.createTaskByColumnID({
        userId,
        boardId,
        columnId,
        title: title.trim(),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['query-column', boardId, columnId]);
      closeHandler();
    },
  });

  return (
    <div
      onKeyDown={(e) => {
        e.key === 'Escape' && closeHandler();
      }}
    >
      <input
        value={title}
        placeholder="Write task title"
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 w-full rounded-lg border bg-transparent p-4 pt-3 pb-5 text-lg font-black outline-none placeholder:text-sm placeholder:font-medium placeholder:opacity-40 dark:border-zinc-600 dark:text-white"
        autoFocus={true}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && title.trim()) {
            mutate();
          }
        }}
      />
      <div
        className="flex items-center justify-between space-x-7"
        id="create-task"
      >
        <Button
          onClick={() => mutate()}
          disabled={isLoading ? true : title.trim() ? false : true}
          loading={isLoading}
        >
          Create task
        </Button>
        <Button size={'sm'} variant="ghost" onClick={closeHandler}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
