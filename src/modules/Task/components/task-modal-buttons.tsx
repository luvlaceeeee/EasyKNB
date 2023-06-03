import { Button } from '@/shared/ui/button';
import { BookmarkPlus, Edit2, Settings2, Trash2, UserPlus } from 'lucide-react';
import { FC } from 'react';

export const TaskModalButtons: FC = () => {
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-right text-xs text-muted-foreground">Task actions</p>
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
        <Edit2 className="mr-2 h-3.5 w-3.5" />
        Rename task
      </Button>
      <Button
        variant={'secondary'}
        size={'xs'}
        className="justify-start font-normal"
      >
        <Settings2 className="mr-2 h-3.5 w-3.5" />
        Change position
      </Button>
      <Button
        variant={'secondary'}
        size={'xs'}
        className="justify-start font-normal"
      >
        <Trash2 className="mr-2 h-3.5 w-3.5" />
        Delete task
      </Button>
    </div>
  );
};
