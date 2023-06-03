import { stringToNumber, throwError } from '@/shared/helpers';
import { useQueryParams } from '@/shared/hooks';
import { useAuthStore } from '@/shared/store';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { Textarea } from '@/shared/ui/textarea';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useColumnData } from '../board/hooks';
import { useTaskData } from './hooks/useTaskData';

export const TaskModal = () => {
  const { isLoading, data } = useTaskData();
  const user = useAuthStore((s) => s.user);

  const columnId =
    stringToNumber(useParams().columnId) ??
    throwError(new Error('column id is null'));
  const { data: column } = useColumnData(columnId);

  const [userId, boardId, queryClient] = useQueryParams();
  const navigate = useNavigate();

  const [systemComments, setSystemComments] = useState(false);

  return (
    <Dialog open={true} onOpenChange={() => navigate(`/board/${boardId}`)}>
      <DialogContent className="sm:max-w-[425px]">
        {isLoading ? (
          <TaskModal.Skeleton />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{data?.text}</DialogTitle>
              <DialogDescription>
                In column{' '}
                <span className="underline decoration-primary">
                  {column?.title}
                </span>
              </DialogDescription>
            </DialogHeader>
            {/* Members */}
            <div>
              <p className="mb-1 text-sm text-muted-foreground">Members</p>
              <div className="flex space-x-2">
                {data?.makers.map((member) => (
                  <Avatar className="h-7 w-7">
                    <AvatarImage src={member.avatar} alt={member.fullName} />
                    <AvatarFallback>
                      {member.name.charAt(0) + member.surname.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                ))}
                <Button
                  variant={'ghost'}
                  className="w-10 rounded-full p-0"
                  asChild
                >
                  <Avatar className="h-7 w-7">
                    <AvatarFallback className="bg-transparent">
                      <Plus className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </div>
            </div>
            {/* Tags */}
            <div>
              <p className="mb-1 text-sm text-muted-foreground">Tags</p>
            </div>
            {/* Description */}
            <div>
              <h4 className="mb-1 scroll-m-20 text-lg font-semibold tracking-tight">
                Description
              </h4>
              <Textarea placeholder="Type your message here." />
            </div>
            {/* Comments */}
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
                {data?.comments.map((comment) => {
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
                          <small className="text-sm leading-none">
                            {comment.text}
                          </small>
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
