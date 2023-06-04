import { IUser } from '@/shared/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/shared/ui/hover-card';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface TaskContentProps {
  makers: IUser[];
}

export const TaskContent: FC<TaskContentProps> = ({ makers }) => {
  return (
    <div className="flex items-center space-x-2">
      {makers &&
        makers.map((maker) => {
          return (
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
          );
        })}
    </div>
  );
};
