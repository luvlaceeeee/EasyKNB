import { useAuthStore } from '@/shared/store';
import { IComment } from '@/shared/types/IComment';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';
import { Textarea } from '@/shared/ui/textarea';
import { FC, useState } from 'react';

interface TaskModalCommentsProps {
  comments: IComment[];
}

export const TaskModalComments: FC<TaskModalCommentsProps> = ({ comments }) => {
  const [systemComments, setSystemComments] = useState(false);
  const user = useAuthStore((s) => s.user);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Comments
        </h4>
        <Button
          size={'sm'}
          variant={'ghost'}
          className="h-auto p-0.5 px-1 text-xs font-normal text-muted-foreground"
          onClick={() => setSystemComments(!systemComments)}
        >
          {systemComments ? 'Hide' : 'Show'} system comments
        </Button>
      </div>

      <div className="mb-4 flex">
        <Avatar className="mr-2 h-8 w-8">
          <AvatarImage src={user.avatar} alt={user.fullName} />
          <AvatarFallback>
            {user.name.charAt(0) + user.surname.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <Textarea placeholder="Type your comment here." />
      </div>

      <div className="space-y-3 border-t pt-3">
        {comments.map((comment) => {
          if (systemComments) {
            return (
              <div className="flex items-center">
                <Avatar className="mr-2 h-8 w-8">
                  <AvatarImage
                    src={comment.user.avatar}
                    alt={comment.user.fullName}
                  />
                  <AvatarFallback>
                    {comment.user.name.charAt(0) +
                      comment.user.surname.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <small className="text-sm leading-none">{comment.text}</small>
                  <p className="text-xs text-muted-foreground">
                    {new Date(comment.date).toUTCString()}
                  </p>
                </div>
              </div>
            );
          } else {
            if (comment.type !== 'System') {
              return (
                <div className="flex items-center">
                  <Avatar className="mr-2 h-8 w-8">
                    <AvatarImage
                      src={comment.user.avatar}
                      alt={comment.user.fullName}
                    />
                    <AvatarFallback>
                      {comment.user.name.charAt(0) +
                        comment.user.surname.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <small className="text-sm leading-none">
                      {comment.text}
                    </small>
                    <p className="text-xs text-muted-foreground">
                      {new Date(comment.date).toUTCString()}
                    </p>
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
};
