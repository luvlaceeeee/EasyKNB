import { ColumnService } from '@/modules/board/services';
import { useQueryParams } from '@/shared/hooks';
import { Button } from '@/shared/ui/button';
import { useMutation } from '@tanstack/react-query';
import { X } from 'lucide-react';
import { FC, useState } from 'react';

interface CreateTaskMenuProps {
  columnId: number;
  setCreateMenuOpen: React.Dispatch<boolean>;
  // dispatch: React.Dispatch<Action>;
}

export const CreateTaskMenu: FC<CreateTaskMenuProps> = ({
  setCreateMenuOpen,
  columnId,
  // dispatch,
}) => {
  const [title, setTitle] = useState('');

  const closeHandler = () => {
    setCreateMenuOpen(false);
    setTitle('');
  };

  //TODO Check how close menu after invalidate query is done
  const [userId, boardId, queryClient] = useQueryParams();

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
        className="mb-4 w-full rounded-md border border-secondary bg-transparent p-4 pt-3 font-semibold outline-none placeholder:text-sm placeholder:font-normal placeholder:opacity-60"
        autoFocus={true}
        maxLength={40}
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
          onClick={() => {
            // dispatch({
            //   type: ActionKind.createTask,
            //   task: {
            //     id: 0,
            //     description: '',
            //     makers: [],
            //     position: 10,
            //     text: title.trim(),
            //   },
            // });
            mutate();
          }}
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
