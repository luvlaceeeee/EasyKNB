import { BoardService } from '@page/BoardPage/API/BoardService';
import { DefaultButton } from '@shared/UI/Buttons/DefaultButton';
import { IconButton } from '@shared/UI/Buttons/IconButton';
import { Input } from '@shared/UI/Input/Input';
import { Modal } from '@shared/UI/Modal/Modal';
import { userIdAtom } from '@shared/store/AuthStore';
import { useAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useQueryClient } from 'react-query';

// const { boardId } = useParams();
const [, renameBoardAtom] = atomsWithMutation((get) => ({
  mutationKey: ['rename-board'],
  mutationFn: (title: string) =>
    BoardService.renameBoardById(get(userIdAtom), boardId, title),
}));

export const RenameBoardModal: FC<{
  setOpen: (arg0: boolean) => void;
  isOpen: boolean;
}> = ({ isOpen, setOpen }) => {
  const [title, setTitle] = useState<string>('');
  const [renameBoardState, mutate] = useAtom(renameBoardAtom);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (renameBoardState.isSuccess) {
      queryClient.invalidateQueries(['query-board']);
      setOpen(false);
      setTitle('');
    }
  }, [renameBoardState]);

  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <div className="flex w-72 flex-col space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold dark:text-zinc-200">
            Rename board
          </span>
          <IconButton icon={<FiX />} handlerFn={() => setOpen(false)} />
        </div>
        <Input
          label="New board title"
          placeHolder="New board title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <DefaultButton
          text="Rename"
          onClick={() => {
            mutate([title]);
          }}
          isLoading={renameBoardState.isLoading}
        />
      </div>{' '}
    </Modal>
  );
};
