import { Button } from '@/shared/ui/button';
import { FC } from 'react';

// const [, deleteColumnAtom] = atomsWithMutation((get) => ({
//   mutationKey: ['delete-board'],
//   mutationFn: (columnId: number | null) =>
//     ColumnService.deleteColumnById(get(userIdAtom), get(boardIdAtom), columnId),
// }));

export const DeleteColumnModal: FC<{
  setOpen: React.Dispatch<
    React.SetStateAction<{
      target: string;
      state: boolean;
    }>
  >;
  title?: string;
  id?: number;
}> = ({ setOpen, title, id }) => {
  return (
    <div className="flex w-72 flex-col space-y-5">
      {/* <ModalHeader title="Delete column" setOpen={setOpen} /> */}
      <span className="dark:text-zinc-200">
        Are you sure you want to remove the column&nbsp;
        <span className="font-bold">{title}</span>?
      </span>
      <div className="flex space-x-3">
        {/* <Button
          onClick={() => {
            //TODO fix mutate, create without params(boardId)
            mutate([id!]);
          }}
          className="bg-green-500 hover:bg-green-400 dark:bg-green-800 dark:hover:bg-green-900"
          loading={deleteColumnState.isLoading}
          autoFocus={true}
        >
          Yes
        </Button> */}
        <Button
          onClick={() => {
            setOpen({ target: '', state: false });
          }}
          className="bg-red-500 hover:bg-red-400 dark:bg-red-800 dark:hover:bg-red-900"
        >
          No
        </Button>
      </div>
    </div>
  );
};
