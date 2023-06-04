import { IUser } from '@/shared/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/shared/ui/hover-card';
import { Plus } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface TaskModalMakersProps {
  makers: IUser[];
}

export const TaskModalMakers: FC<TaskModalMakersProps> = ({ makers }) => {
  return (
    <div>
      <p className="mb-1 text-sm text-muted-foreground">Members</p>
      <div className="flex space-x-2">
        {makers.map((maker) => (
          <HoverCard key={maker.id} openDelay={300} closeDelay={100}>
            <HoverCardTrigger>
              <Avatar className="h-7 w-7">
                <AvatarImage src={maker.avatar} alt={maker.fullName} />
                <AvatarFallback>
                  {maker.name.charAt(0) + maker.surname.charAt(0)}
                </AvatarFallback>
              </Avatar>{' '}
            </HoverCardTrigger>
            <HoverCardContent
              className="w-52"
              onClick={(e) => e.preventDefault()}
            >
              <div className="flex space-x-4">
                <Link to={`/user/${maker.id}`}>
                  <Avatar>
                    <AvatarImage src={maker.avatar} />
                    <AvatarFallback>
                      {maker.name.charAt(0) + maker.surname.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{maker.fullName}</h4>
                  <p className="text-sm">{maker.email}</p>
                  {/* <div className="flex items-center pt-2">
                   <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
                   <span className="text-xs text-muted-foreground">
                     Joined December 2021
                   </span>
                 </div> */}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
        <Button variant={'outline'} className="w-10 rounded-full p-0" asChild>
          <Avatar className="h-7 w-7 cursor-pointer">
            <AvatarFallback className="bg-transparent">
              <Plus className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </div>
  );
};
