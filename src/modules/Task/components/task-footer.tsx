import { IComment } from '@/shared/types/IComment';
import { Button } from '@/shared/ui/button';
import { AlignLeft, MessageSquare, Timer } from 'lucide-react';
import { FC } from 'react';

interface TaskFooterProps {
  description: string;
  comments: IComment[];
}
export const TaskFooter: FC<TaskFooterProps> = ({ description, comments }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {description && (
          <Button
            size={'sm'}
            variant={'ghost'}
            className="h-auto p-0 text-xs font-normal text-muted-foreground"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
        )}

        {comments.filter((comment) => comment.type !== 'System').length !==
          0 && (
          <div className="flex items-center space-x-1">
            <Button
              size={'sm'}
              variant={'ghost'}
              className="h-auto p-0 text-xs font-normal text-muted-foreground"
            >
              <MessageSquare className="h-4 w-4" />
            </Button>
            <p className="text-sm text-muted-foreground">
              {comments.filter((comment) => comment.type !== 'System').length}
            </p>
          </div>
        )}
      </div>

      {false && (
        <div className="flex items-center space-x-1">
          <p className="text-sm text-muted-foreground">
            {new Date().toUTCString().split(' ').slice(1, 3).join(' ')}
          </p>
          <Button
            size={'sm'}
            variant={'ghost'}
            className="h-auto p-0 text-xs font-normal text-muted-foreground"
          >
            <Timer className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
