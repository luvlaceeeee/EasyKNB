import { boardAtom, boardIdAtom } from '@page/BoardPage/components/BoardPage';
import { stringToNumber } from '@shared/helpers';
import { useAtom, useSetAtom } from 'jotai';
import { useParams } from 'react-router-dom';

export const useBoardData = () => {
  const setBoardId = useSetAtom(boardIdAtom);
  const { boardId } = useParams();

  setBoardId(stringToNumber(boardId));

  return useAtom(boardAtom);
};
