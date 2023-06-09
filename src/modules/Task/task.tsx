import { useAuthStore } from '@/shared/store';
import { ITask } from '@/shared/types';
import { Tag } from '@/shared/ui/tag';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TaskContent } from './components/task-content';
import { TaskFooter } from './components/task-footer';

interface TaskProps {
  columnId: number;
  task: ITask;
}

export const Task: FC<TaskProps> = ({ columnId, task }) => {
  const user = useAuthStore((s) => s.user);
  const userInTask = task.makers.filter((maker) => maker.id === user.id);
  const isFooterOpen =
    task.description ||
    !!task.comments.filter((comment) => comment.type !== 'System').length;
  return (
    <Link to={`c/${columnId}/${task.id}`}>
      <div
        className={`rounded-md border border-secondary bg-primary-foreground/80 p-4 pb-2 pt-3 hover:bg-accent hover:text-accent-foreground ${
          userInTask.length && 'bg-secondary/40'
        }`}
      >
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1">
            <Tag bg={'oceanicLight'}>Frontend</Tag>
          </div>
          <p className="break-all font-semibold">{task.text}</p>
          <TaskContent makers={task.makers} />
          {isFooterOpen && (
            <TaskFooter
              description={task.description}
              comments={task.comments}
            />
          )}
        </div>
      </div>
    </Link>
  );
};
