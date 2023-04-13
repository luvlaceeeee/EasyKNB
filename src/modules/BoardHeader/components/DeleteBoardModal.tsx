import { BoardService } from '@page/BoardPage/API/BoardService';
import { boardIdAtom } from '@page/BoardPage/components/BoardPage';
import { DefaultButton, ModalHeader } from '@shared/UI';
import { userIdAtom } from '@shared/store/AuthStore';
import { useAtom, useAtomValue } from 'jotai';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { FC, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

const [, deleteBoardAtom] = atomsWithMutation((get) => ({
  mutationKey: ['delete-board'],
  mutationFn: (boardId: number | null) =>
    BoardService.deleteBoardById(get(userIdAtom), boardId),
}));

export const DeleteBoardModal: FC<{
  setOpen: React.Dispatch<
    React.SetStateAction<{
      target: string;
      state: boolean;
    }>
  >;
  title: string;
}> = ({ setOpen, title }) => {
  const [deleteBoardState, mutate] = useAtom(deleteBoardAtom);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const boardId = useAtomValue(boardIdAtom);

  useEffect(() => {
    if (deleteBoardState.isSuccess) {
      queryClient.invalidateQueries(['query-boards']);
      setOpen({ target: '', state: false });
      //TODO fix this
      deleteBoardState.reset();
      navigate('/home');
    }
  }, [deleteBoardState]);

  return (
    <div className="flex w-72 flex-col space-y-5">
      <ModalHeader title="Delete board" setOpen={setOpen} />
      <span className="dark:text-zinc-200">
        Are you sure you want to remove the{' '}
        <span className="font-bold">{title}</span>?
      </span>
      <div className="flex space-x-3">
        <DefaultButton
          text={'Yes'}
          onClick={() => {
            //TODO fix mutate, create without params(boardId)
            mutate([boardId]);
          }}
          className="bg-green-500 hover:bg-green-400 dark:bg-green-800 dark:hover:bg-green-900"
          isLoading={deleteBoardState.isLoading}
          autoFocus={true}
        />
        <DefaultButton
          text={'No'}
          onClick={() => {
            setOpen({ target: '', state: false });
          }}
          className="bg-red-500 hover:bg-red-400 dark:bg-red-800 dark:hover:bg-red-900"
        />
      </div>
    </div>
  );
};
