import { useQueryParams } from '@/shared/hooks';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { BookmarkPlus, Edit2, Settings2, Trash2, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TaskModalComments } from './components/task-modal-comments';
import { TaskModalDescription } from './components/task-modal-description';
import { TaskModalHeader } from './components/task-modal-header';
import { TaskModalMakers } from './components/task-modal-makers';
import { TaskModalTags } from './components/task-modal-tags';
import { useTaskData } from './hooks/useTaskData';

export const TaskModal = () => {
  const { isLoading, data } = useTaskData();

  const navigate = useNavigate();
  const [, boardId] = useQueryParams();

  return (
    <Dialog open={true} onOpenChange={() => navigate(`/board/${boardId}`)}>
      <DialogContent
        className="max-w-7xl"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {isLoading ? (
          <TaskModal.Skeleton />
        ) : (
          <>
            <TaskModalHeader title={data ? data.text : ''} />
            <div className="flex items-start justify-between">
              <div className="mr-5 flex-1 space-y-3">
                <TaskModalMakers makers={data ? data.makers : []} />
                <TaskModalTags />
                <TaskModalDescription desc={data ? data.description : ''} />
                <TaskModalComments comments={data ? data.comments : []} />
              </div>

              <div className="flex flex-col space-y-2">
                <p className="text-right text-xs text-muted-foreground">
                  Task actions
                </p>
                <Button
                  variant={'secondary'}
                  size={'xs'}
                  className="justify-start font-normal"
                >
                  <Edit2 className="mr-2 h-3.5 w-3.5" />
                  Rename task
                </Button>
                <Button
                  variant={'secondary'}
                  size={'xs'}
                  className="justify-start font-normal"
                >
                  <UserPlus className="mr-2 h-3.5 w-3.5" />
                  Add member
                </Button>
                <Button
                  variant={'secondary'}
                  size={'xs'}
                  className="justify-start font-normal"
                >
                  <BookmarkPlus className="mr-2 h-3.5 w-3.5" />
                  Add tag
                </Button>
                <Button
                  variant={'secondary'}
                  size={'xs'}
                  className="justify-start font-normal"
                >
                  <Trash2 className="mr-2 h-3.5 w-3.5" />
                  Delete task
                </Button>
                <Button
                  variant={'secondary'}
                  size={'xs'}
                  className="justify-start font-normal"
                >
                  <Settings2 className="mr-2 h-3.5 w-3.5" />
                  Change position
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

TaskModal.Skeleton = function TaskModalSkeleton() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>{'safa'}</DialogTitle>
        <DialogDescription>Loading</DialogDescription>
      </DialogHeader>
    </>
  );
};
