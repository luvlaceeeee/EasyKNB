import { stringToNumber, throwError } from '@/shared/helpers';
import { useAuthStore } from '@/shared/store';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/shared/ui/alert-dialog';
import { Button } from '@/shared/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { ColumnService } from '../../services';

interface DeleteColumnModalProps {
  title: string;
  columnId: number;
  open: boolean;
  onOpenChange: React.Dispatch<boolean>;
}

export const DeleteColumnModal: FC<DeleteColumnModalProps> = ({
  title,
  columnId,
  open,
  onOpenChange,
}) => {
  const userId = useAuthStore((state) => state.user.id);
  const boardId =
    stringToNumber(useParams().boardId) ??
    throwError(new Error('boardId is null'));
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationKey: ['delete-column', columnId],
    mutationFn: () =>
      ColumnService.deleteColumnById({
        userId,
        boardId,
        columnId,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['query-board', boardId]);
      onOpenChange(false);
    },
  });

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you want to remove the column{' '}
            <span className="text-xl underline decoration-primary">
              {title}
            </span>
            ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            column and remove your data from our servers.
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
