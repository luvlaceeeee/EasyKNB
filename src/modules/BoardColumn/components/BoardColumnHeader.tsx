import { boardIdAtom } from '@page/BoardPage/components/BoardPage';
import { IconButton, Modal } from '@shared/UI';
import { userIdAtom } from '@shared/store/AuthStore';
import { atom, useAtom, useSetAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useRef, useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { ColumnService } from '../API';
import { BoardColumnDropDown } from './BoardColumnDropDown';
import { DeleteColumnModal } from './DeleteColumnModal';

//TODO add check to empty column title

export const columnIdAtom = atom<number | null>(null);
const [, renameColumnAtom] = atomsWithMutation((get) => ({
  mutationKey: ['rename-board'],
  mutationFn: (title: string) =>
    ColumnService.renameColumnById(
      get(userIdAtom),
      get(boardIdAtom),
      get(columnIdAtom),
      title
    ),
}));

export const BoardColumnHeader: FC<{ title?: string; id?: number }> = ({
  title,
  id,
}) => {
  const [isModalOpen, setModalOpen] = useState({ target: '', state: false });
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [columnTitle, setColumnTitle] = useState(title);
  const [columnTitleAfter, setColumnTitleAfter] = useState(title);

  const setColumnId = useSetAtom(columnIdAtom);
  const [renameColumnState, mutate] = useAtom(renameColumnAtom);

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="relative z-10 flex items-center justify-between dark:text-zinc-200">
      <input
        type="text"
        onFocus={() => setColumnId(id!)} //TODO Check this type questionX
        value={columnTitle}
        onChange={(e) => setColumnTitle(e.target.value)}
        maxLength={40}
        className="cursor-default bg-transparent p-1 text-xl font-bold focus:bg-zinc-50 focus:dark:bg-zinc-800"
        onBlur={() => {
          if (!(columnTitle === columnTitleAfter)) {
            mutate([columnTitle!.trim()]);
            setColumnTitleAfter(columnTitle);
          }
        }}
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            inputRef.current?.blur();
          }
        }}
      />
      <div className="flex">
        {/* <IconButton
          icon={<FiPlusCircle size={20} />}
          handlerFn={() => {
            console.log('object');
          }}
        /> */}
        <span
          onMouseEnter={() => {
            setDropdownOpen(true);
          }}
          onMouseLeave={() => {
            setDropdownOpen(false);
          }}
        >
          <IconButton
            icon={<FiMoreHorizontal size={20} />}
            handlerFn={() => {
              setDropdownOpen(!isDropdownOpen);
            }}
          />
        </span>
        {isDropdownOpen && (
          <BoardColumnDropDown
            setOpen={setDropdownOpen}
            setModalOpen={setModalOpen}
            renameBoard={inputRef}
          />
        )}
      </div>
      <Modal isOpen={isModalOpen.state} setOpen={setModalOpen}>
        {isModalOpen.target === 'delete' && (
          <DeleteColumnModal setOpen={setModalOpen} title={title} id={id} />
        )}
      </Modal>
    </div>
  );
};
