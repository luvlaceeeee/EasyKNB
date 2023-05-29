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
import { FC, useState } from 'react';
import { DeleteColumnModal } from './delete-column-modal';

interface BoardColumnDropDownProps {
  inputRef: React.RefObject<HTMLInputElement>;
  title: string;
  columnId: number;
}

export const BoardColumnDropDown: FC<BoardColumnDropDownProps> = ({
  inputRef,
  title,
  columnId,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="border">
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
          <DropdownMenuItem onSelect={() => inputRef.current?.focus()}>
            <Edit2 className="mr-2 h-4 w-4" />
            <span>Rename column</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setOpenDeleteModal(true)}>
            <Trash2 className="mr-2 h-4 w-4" />
            <span>Delete column</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings2 className="mr-2 h-4 w-4" />
            <span>Change position</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
      <DeleteColumnModal
        title={title}
        columnId={columnId}
        open={openDeleteModal}
        onOpenChange={setOpenDeleteModal}
      />
    </DropdownMenu>
  );
};
