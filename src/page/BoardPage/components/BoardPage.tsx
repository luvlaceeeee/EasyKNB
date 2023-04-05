import { BoardContent } from '@modules/BoardContent';
import { BoardHeader } from '@modules/BoardHeader/components/BoardHeader';
import { ContentLayout, HeaderLayout } from '@shared/layout';
import { userIdAtom } from '@shared/store';
import { IBoard } from '@shared/types';
import { atom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { Suspense } from 'react';
import { BoardService } from '../API';

export const boardIdAtom = atom<number | null>(null);
export const [boardAtom] = atomsWithQuery<IBoard>((get) => {
  const userId = get(userIdAtom);
  const boardId = get(boardIdAtom);

  return {
    queryKey: ['query-board', userId, boardId],
    queryFn: () =>
      boardId
        ? BoardService.findBoardByUserId(userId, boardId)
        : Promise.reject('Board id is null'),
  };
});

export const BoardPage = () => {
  return (
    <ContentLayout>
      <Suspense fallback={<h1>Loading</h1>}>
        <HeaderLayout>
          <BoardHeader />
        </HeaderLayout>
        <BoardContent />
      </Suspense>
    </ContentLayout>
  );
};
