import { useAuthStore } from '@/shared/store/auth.store';
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
import { useState } from 'react';
import { HomeService } from '../services';

export const CreateBoardModal = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');

  const dialogHandler = () => {
    setOpen(!open);
    setTitle('');
  };

  const userId = useAuthStore((state) => state.user.id);
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationKey: ['create-board'],
    mutationFn: () => HomeService.createBoardByUserID(userId, title),
    onSuccess: () => {
      queryClient.invalidateQueries(['query-boards']);
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={dialogHandler}>
      <DialogTrigger asChild>
        <Button variant="outline">Create board</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create board</DialogTitle>
        </DialogHeader>
        <Input
          id="board-title"
          placeholder="Board title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus={true}
          maxLength={40}
        />
        <DialogFooter>
          <Button
            onClick={() => mutate()}
            disabled={isLoading || !title.trim()}
            loading={isLoading}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
