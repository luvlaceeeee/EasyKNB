import { useQueryParams } from '@/shared/hooks';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/shared/ui/alert-dialog';
import { Button } from '@/shared/ui/button';
import { useMutation } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoardService } from '../services';

interface DeleteBoardModalProps {
  boardTitle: string;
}

export const DeleteBoardModal: FC<DeleteBoardModalProps> = ({ boardTitle }) => {
  const [open, setOpen] = useState(false);

  const [userId, boardId, queryClient] = useQueryParams();

  const navigate = useNavigate();

  const { isLoading, mutate } = useMutation({
    mutationKey: ['delete-board', boardId],
    mutationFn: () => BoardService.deleteBoard(userId, boardId),
    onSuccess: () => {
      queryClient.invalidateQueries(['query-board', boardId]);
      navigate('/home');
    },
  });

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Delete board</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you want to remove the board{' '}
            <span className="text-xl underline decoration-primary">
              {boardTitle}
            </span>
            ?{' '}
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the board
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              onClick={() => mutate()}
              variant={'destructive'}
              loading={isLoading}
            >
              Continue
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
