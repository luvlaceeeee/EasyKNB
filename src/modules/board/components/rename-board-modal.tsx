import { useQueryParams } from '@/shared/hooks';
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
import { useMutation } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { BoardService } from '../services';

interface IRenameBoardProps {
  boardTitle: string;
}

export const RenameBoardModal: FC<IRenameBoardProps> = ({ boardTitle }) => {
  const [title, setTitle] = useState<string>(boardTitle);
  const [open, setOpen] = useState(false);

  const [userId, boardId, queryClient] = useQueryParams();

  const { isLoading, mutate } = useMutation({
    mutationKey: ['rename-board'],
    mutationFn: () => BoardService.renameBoard({ userId, boardId, title }),
    onSuccess: () => {
      queryClient.invalidateQueries(['query-board', boardId]);
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Rename board</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Rename board</DialogTitle>
        </DialogHeader>
        <div>
          {/* Add label */}
          <Input
            id="board-title"
            placeholder="New board title"
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
            Rename
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
