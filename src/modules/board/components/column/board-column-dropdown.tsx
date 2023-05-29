import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import {
  Edit2,
  MoreHorizontal,
  PlusCircle,
  Settings2,
  Trash2,
} from 'lucide-react';
import { FC } from 'react';

interface BoardColumnDropDownProps {
  inputRef: React.RefObject<HTMLInputElement>;
  title: string;
}

export const BoardColumnDropDown: FC<BoardColumnDropDownProps> = ({
  inputRef,
  title,
}) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>Create task</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => inputRef.current?.focus()}>
            <Edit2 className="mr-2 h-4 w-4" />
            <span>Rename column</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Trash2 className="mr-2 h-4 w-4" />
            <span>Delete column</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings2 className="mr-2 h-4 w-4" />
            <span>Change position</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
