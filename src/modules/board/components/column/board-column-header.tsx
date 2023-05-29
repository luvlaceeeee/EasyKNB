import { Input } from '@/shared/ui/input';
import { FC, useRef, useState } from 'react';
import { BoardColumnDropDown } from './board-column-dropdown';

//TODO add check to empty column title
export const BoardColumnHeader: FC<{ title: string; id: number }> = ({
  title,
  id,
}) => {
  // const [isModalOpen, setModalOpen] = useState({ target: '', state: false });
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [columnTitle, setColumnTitle] = useState(title);
  // const [columnTitleAfter, setColumnTitleAfter] = useState(title);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center justify-between dark:text-zinc-200">
      <Input
        type="text"
        value={columnTitle}
        onChange={(e) => setColumnTitle(e.target.value)}
        maxLength={40}
        className="cursor-default border-none bg-transparent p-1 text-xl font-bold"
        // onBlur={() => {
        //   if (!(columnTitle === columnTitleAfter)) {
        //     // mutate([columnTitle!.trim()]);
        //     setColumnTitleAfter(columnTitle);
        //   }
        // }}
        ref={inputRef}
        onKeyDown={(e) => {
          e.key === 'Enter' && inputRef.current?.blur();
        }}
      />
      <BoardColumnDropDown inputRef={inputRef} title={title} />
    </div>
  );
};
