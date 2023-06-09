import { useQueryParams } from '@/shared/hooks';
import { Input } from '@/shared/ui/input';
import { useMutation } from '@tanstack/react-query';
import { FC, useRef, useState } from 'react';
import { ColumnService } from '../services/column.service';
import { BoardColumnDropDown } from './board-column-dropdown';

interface BoardColumnHeaderProps {
  title: string;
  columnId: number;
  countTasks: number;
}

export const BoardColumnHeader: FC<BoardColumnHeaderProps> = ({
  title,
  columnId,
  countTasks,
  ...props
}) => {
  const [columnTitle, setColumnTitle] = useState(title);
  const [columnTitleAfter, setColumnTitleAfter] = useState(title);

  const inputRef = useRef<HTMLInputElement>(null);

  const [userId, boardId] = useQueryParams();

  const { mutate } = useMutation({
    mutationKey: ['rename-column', columnId],
    mutationFn: () =>
      ColumnService.renameColumnById({
        userId,
        boardId,
        columnId,
        title: columnTitle,
      }),
  });

  return (
    <div>
      <div
        {...props}
        className="p-0.5 opacity-0 transition-all before:mx-auto before:mb-0.5 before:block before:w-2/4 before:rounded-full before:bg-secondary before:p-[1px] after:mx-auto after:mb-1 after:block after:w-1/3 after:rounded-full after:bg-secondary after:p-[1px] hover:opacity-100"
      ></div>
      <div className="flex items-center justify-between space-x-3 dark:text-zinc-200">
        <Input
          value={columnTitle}
          onChange={(e) => setColumnTitle(e.target.value)}
          maxLength={40}
          className="cursor-default border-none bg-transparent p-1.5 text-xl font-bold"
          onBlur={() => {
            if (columnTitle.trim() !== columnTitleAfter.trim()) {
              if (!columnTitle.trim()) {
                setColumnTitle(columnTitleAfter);
                return;
              }
              mutate();
              setColumnTitleAfter(columnTitle);
            }
          }}
          onKeyDown={(e) => {
            e.key === 'Enter' && inputRef.current?.blur();
          }}
          ref={inputRef}
        />
        <p className="text-sm text-muted-foreground">{countTasks}</p>

        <BoardColumnDropDown
          inputRef={inputRef}
          title={title}
          columnId={columnId}
        />
      </div>
    </div>
  );
};
