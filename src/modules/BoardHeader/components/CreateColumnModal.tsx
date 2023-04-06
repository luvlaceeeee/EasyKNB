import { BoardService } from '@page/BoardPage/API/BoardService';
import { boardIdAtom } from '@page/BoardPage/components/BoardPage';
import { DefaultButton, Input, ModalHeader } from '@shared/UI';
import { userIdAtom } from '@shared/store/AuthStore';
import { useAtom } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';

const [, createColumnAtom] = atomsWithMutation((get) => ({
  mutationKey: ['create-column'],
  mutationFn: (title: string) =>
    BoardService.createColumnByBoardId(
      get(userIdAtom),
      get(boardIdAtom),
      title
    ),
}));

export const CreateColumnModal: FC<{
  setOpen: (arg0: boolean) => void;
}> = ({ setOpen }) => {
  const [title, setTitle] = useState<string>('');
  const [createColumnState, mutate] = useAtom(createColumnAtom);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (createColumnState.isSuccess) {
      queryClient.invalidateQueries(['query-board']);
      setOpen(false);
      setTitle('');
      //TODO fix this
      createColumnState.reset();
    }
  }, [createColumnState]);

  return (
    <div className="flex w-72 flex-col space-y-5">
      <ModalHeader title="Create Column" setOpen={setOpen} />
      <Input
        label="New column title"
        placeHolder="Column title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus={true}
      />
      <DefaultButton
        text="Create"
        onClick={() => {
          mutate([title]);
        }}
        disabled={title ? false : true}
        isLoading={createColumnState.isLoading}
      />
    </div>
  );
};
