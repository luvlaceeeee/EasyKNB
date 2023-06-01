import { trimLine } from '@/shared/helpers';
import { IUser } from '@/shared/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface TaskProps {
  title: string;
  taskId: number;
  columnId: number;
  description?: string;
  makers?: IUser[];
}

export const Task: FC<TaskProps> = ({
  title,
  columnId,
  description,
  makers,
  taskId,
}) => {
  return (
    <div className={`group relative`}>
      {/* <Button
        variant="ghost"
        // onClick={() => mutate([[taskId, columnId]])}
        className="invisible absolute top-0 right-0 opacity-0 hover:bg-transparent hover:text-red-500 group-hover:visible group-hover:opacity-100 dark:hover:bg-opacity-0 dark:hover:text-red-700"
      >
        <FiTrash />
      </Button> */}
      <Link to={`c/${columnId}/${taskId}`}>
        <div className="rounded-md border border-secondary p-4 pt-3 hover:bg-accent hover:text-accent-foreground">
          <div className="space-y-2">
            {/* task header */}
            <p className="break-all font-semibold">{title}</p>
            {/* task content */}
            {description && (
              <p className="text-sm text-zinc-500">
                {trimLine(description, 60)}
              </p>
            )}
            {/* task footer */}
            {makers &&
              makers.map((maker) => {
                return (
                  <Avatar className="h-7 w-7">
                    <AvatarImage
                      src={maker.avatar}
                      // alt="@shadcn"
                    />
                    <AvatarFallback>
                      {maker.name.charAt(0) + maker.surname.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                );
              })}
          </div>
        </div>
      </Link>
    </div>
  );
};
