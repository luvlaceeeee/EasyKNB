import { HomeService } from '@page/HomePage';
import { DefaultButton, Input, ModalHeader } from '@shared/UI';
import { userIdAtom } from '@shared/store';
import { useAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';

//TODO fix create with whitespace in input

const [, boardAtom] = atomsWithMutation((get) => ({
  mutationKey: ['create-board'],
  mutationFn: (title: string) =>
    HomeService.createBoardByUserID(get(userIdAtom), title),
}));

export const CreateBoardModal: FC<{
  setOpen: React.Dispatch<
    React.SetStateAction<{
      target: string;
      state: boolean;
    }>
  >;
}> = ({ setOpen }) => {
  const queryClient = useQueryClient();
  const [boardState, mutate] = useAtom(boardAtom);
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (boardState.isSuccess) {
      queryClient.invalidateQueries(['query-boards']);
      setOpen({ target: '', state: false });
      setTitle('');
      boardState.reset();
    }
  }, [boardState]);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && title.trim() && !boardState.isLoading) {
        mutate([title.trim()]);
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [title, boardState]);

  return (
    <div className="flex w-72 flex-col space-y-5">
      <ModalHeader setOpen={setOpen} title="Create board" />
      <Input
        label="Board title"
        placeHolder="Board title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus={true}
        maxLength={40}
      />
      <DefaultButton
        text="Create"
        onClick={() => {
          mutate([title.trim()]);
        }}
        disabled={boardState.isLoading ? true : title.trim() ? false : true}
        isLoading={boardState.isLoading}
      />
    </div>
  );
};
