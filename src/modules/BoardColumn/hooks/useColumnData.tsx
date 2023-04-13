import { useAtom, useSetAtom } from 'jotai';
import { columnAtom, columnIdAtomFetch } from '../components';

export const useColumnData = (columnId: number) => {
  const setColumnId = useSetAtom(columnIdAtomFetch);

  setColumnId(columnId);

  return useAtom(columnAtom);
};
