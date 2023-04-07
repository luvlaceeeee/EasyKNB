import { BoardService } from '@page/BoardPage/API/BoardService';
import { boardIdAtom } from '@page/BoardPage/components/BoardPage';
import { ModalHeader } from '@shared/UI';
import { DefaultButton } from '@shared/UI/Buttons/DefaultButton';
import { Input } from '@shared/UI/Input/Input';
import { userIdAtom } from '@shared/store/AuthStore';
import { useAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';

const [, renameBoardAtom] = atomsWithMutation((get) => ({
  mutationKey: ['rename-board'],
  mutationFn: (title: string) =>
    BoardService.renameBoardById(get(userIdAtom), get(boardIdAtom), title),
}));

//TODO add before board title to input value

export const RenameBoardModal: FC<{
  setOpen: React.Dispatch<
    React.SetStateAction<{
      target: string;
      state: boolean;
    }>
  >;
  boardTitle: string;
}> = ({ setOpen, boardTitle }) => {
  const [title, setTitle] = useState<string>(boardTitle);
  const [renameBoardState, mutate] = useAtom(renameBoardAtom);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (renameBoardState.isSuccess) {
      queryClient.invalidateQueries(['query-board']);
      setOpen({ target: '', state: false });
      setTitle('');
      queryClient.invalidateQueries(['query-boards']);
      //TODO fix this
      renameBoardState.reset();
    }
  }, [renameBoardState]);

  return (
    <div className="flex w-72 flex-col space-y-5">
      <ModalHeader setOpen={setOpen} title="Rename board" />
      <Input
        label="New board title"
        placeHolder="New board title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus={true}
        maxLength={40}
      />
      <DefaultButton
        text="Rename"
        onClick={() => {
          mutate([title]);
        }}
        disabled={title ? false : true}
        isLoading={renameBoardState.isLoading}
      />
    </div>
  );
};
