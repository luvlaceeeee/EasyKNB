import { IUser } from '@/shared/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';
import { Plus } from 'lucide-react';
import { FC } from 'react';

interface TaskModalMakersProps {
  makers: IUser[];
}

export const TaskModalMakers: FC<TaskModalMakersProps> = ({ makers }) => {
  return (
    <div>
      <p className="mb-1 text-sm text-muted-foreground">Members</p>
      <div className="flex space-x-2">
        {makers.map((member) => (
          <Avatar className="h-7 w-7">
            <AvatarImage src={member.avatar} alt={member.fullName} />
            <AvatarFallback>
              {member.name.charAt(0) + member.surname.charAt(0)}
            </AvatarFallback>
          </Avatar>
        ))}
        <Button variant={'outline'} className="w-10 rounded-full p-0" asChild>
          <Avatar className="h-7 w-7">
            <AvatarFallback className="bg-transparent">
              <Plus className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </div>
  );
};
