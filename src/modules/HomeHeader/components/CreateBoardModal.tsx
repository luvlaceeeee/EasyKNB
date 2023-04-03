import { HomeService } from '@page/HomePage';
import { DefaultButton, IconButton, Input, Modal } from '@shared/UI';
import { userIdAtom } from '@shared/store';
import { useAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useQueryClient } from 'react-query';

const [, boardAtom] = atomsWithMutation((get) => ({
  mutationKey: ['create-board'],
  mutationFn: (title: string) =>
    HomeService.createBoardByUserID(get(userIdAtom), title),
}));

export const CreateBoardModal: FC<{
  setOpen: (arg0: boolean) => void;
  isOpen: boolean;
}> = ({ setOpen, isOpen }) => {
  const queryClient = useQueryClient();
  const [boardState, mutate] = useAtom(boardAtom);
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (boardState.isSuccess) {
      queryClient.invalidateQueries(['query-boards']);
      setOpen(false);
      setTitle('');
    }
  }, [boardState]);

  return (
    <Modal setOpen={setOpen} isOpen={isOpen}>
      <div className="flex w-72 flex-col space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold dark:text-zinc-200">
            Create board
          </span>
          <IconButton icon={<FiX />} handlerFn={() => setOpen(false)} />
        </div>
        <Input
          label="Board title"
          placeHolder="Board title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <DefaultButton
          text="Create"
          onClick={() => {
            mutate([title]);
          }}
          isLoading={boardState.isLoading}
        />
      </div>
    </Modal>
  );
};
