import { stringToNumber, throwError } from '@/shared/helpers';
import { useAuthStore } from '@/shared/store';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BoardService } from '../services';

export const CreateColumnModal: FC = () => {
  const userId = useAuthStore((state) => state.user.id);
  const boardId =
    stringToNumber(useParams().boardId) ??
    throwError(new Error('board id is null'));

  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationKey: ['create-column'],
    mutationFn: () => BoardService.createColumn({ userId, boardId, title }),
    onSuccess: () => {
      queryClient.invalidateQueries(['query-board', boardId]);
      setOpen(false);
    },
  });

  const dialogHandler = () => {
    setOpen(!open);
    setTitle('');
  };

  return (
    <Dialog open={open} onOpenChange={dialogHandler}>
      <DialogTrigger asChild>
        <Button variant="outline">Create column</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create column</DialogTitle>
        </DialogHeader>
        <div>
          {/* Add label */}
          <Input
            id="column-title"
            placeholder="New column title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus={true}
            maxLength={40}
          />
        </div>
        <DialogFooter>
          <Button
            onClick={() => mutate()}
            disabled={isLoading ? true : !title.trim()}
            loading={isLoading}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
