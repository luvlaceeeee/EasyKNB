import { useQueryParams } from '@/shared/hooks';
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { DialogContentLarge } from '@/shared/ui/dialog-large';
import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskModalButtons } from './components/task-modal-buttons';
import { TaskModalComments } from './components/task-modal-comments';
import { TaskModalDescription } from './components/task-modal-description';
import { TaskModalHeader } from './components/task-modal-header';
import { TaskModalMakers } from './components/task-modal-makers';
import { TaskModalTags } from './components/task-modal-tags';
import { useTaskData } from './hooks/useTaskData';

export const TaskModal = () => {
  const navigate = useNavigate();
  const [, boardId] = useQueryParams();

  return (
    <Dialog open={true} onOpenChange={() => navigate(`/board/${boardId}`)}>
      <DialogContentLarge onOpenAutoFocus={(e) => e.preventDefault()}>
        <Suspense fallback={<TaskModal.Skeleton />}>
          <TaskModal.Content />
        </Suspense>
      </DialogContentLarge>
    </Dialog>
  );
};

TaskModal.Content = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useTaskData();

  return (
    <>
      <TaskModalHeader title={data ? data.text : ''} />
      <div className="flex items-start justify-between">
        <div className="mr-5 flex-1 space-y-3">
          <TaskModalMakers makers={data ? data.makers : []} />
          <TaskModalTags />
          <TaskModalDescription desc={data ? data.description : ''} />
          <TaskModalComments comments={data ? data.comments : []} />
        </div>
        <TaskModalButtons />
      </div>
    </>
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
