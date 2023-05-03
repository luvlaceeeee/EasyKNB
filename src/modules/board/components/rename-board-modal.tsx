import { FC, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { BoardService } from '../api/services/board.service';
import { IRenameBoardRequest } from '../api/interfaces';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useAuthStore } from '@/shared/store';
import { stringToNumber } from '@/shared/helpers';
import { useParams } from 'react-router-dom';

interface IRenameBoardProps {
  boardTitle: string;
}

export const RenameBoardModal: FC<IRenameBoardProps> = ({ boardTitle }) => {
  const userId = useAuthStore((state) => state.user.id);
  const boardId = stringToNumber(useParams().boardId);

  const [title, setTitle] = useState(boardTitle);
  const { isLoading, mutate } = useMutation({
    mutationKey: ['rename-board'],
    mutationFn: () => BoardService.renameBoard({ userId, boardId, title }),
  });

  return (
    <Dialog>
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
