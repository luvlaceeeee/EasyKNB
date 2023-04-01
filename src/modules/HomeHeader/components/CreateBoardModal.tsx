import { useAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useQueryClient } from 'react-query';
import BoardService from '../../../page/HomePage/API/HomeService';
import DefaultButton from '../../../shared/UI/Buttons/DefaultButton';
import IconButton from '../../../shared/UI/Buttons/IconButton';
import Input from '../../../shared/UI/Input/Input';
import { userIdAtom } from '../../../shared/store/AuthStore';

const [, boardAtom] = atomsWithMutation((get) => ({
  mutationKey: ['board'],
  mutationFn: (title: string) =>
    BoardService.createBoardByUserID(get(userIdAtom), title),
}));

const CreateBoardModal: FC<{ setOpen: (arg0: boolean) => void }> = ({
  setOpen,
}) => {
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
  );
};

export default CreateBoardModal;
