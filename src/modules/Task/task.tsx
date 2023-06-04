import { useAuthStore } from '@/shared/store';
import { ITask } from '@/shared/types';
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
  return (
    // <div className={`group relative`}>
    <Link to={`c/${columnId}/${task.id}`}>
      <div
        className={`rounded-md border border-secondary bg-primary-foreground/80 p-4 pb-2 pt-3 hover:bg-accent hover:text-accent-foreground ${
          userInTask.length && 'bg-secondary/40'
        }`}
      >
        <div className="space-y-2">
          {/* task header */}
          <p className="break-all font-semibold">{task.text}</p>
          {/* task content */}
          <TaskContent makers={task.makers} />
          {/* task footer */}
          <TaskFooter description={task.description} comments={task.comments} />
        </div>
      </div>
    </Link>
    // </div>
  );
};
