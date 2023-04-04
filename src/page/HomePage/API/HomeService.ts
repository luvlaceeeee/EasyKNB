import { $api } from '@shared/API';
import { IHomeBoard } from '../types/IHomeBoard';

const findBoardsByUserId = async (userId: number): Promise<IHomeBoard[]> => {
  const { data } = await $api.get<IHomeBoard[]>('/boards', {
    params: {
      userId: userId,
    },
  });
  return data;
};

const createBoardByUserID = async (
  userId: number,
  title: string
): Promise<void> => {
  const { data } = await $api.post<IHomeBoard>(
    '/boards',
    {
      title: title,
    },
    {
      params: {
        userId: userId,
      },
    }
  );
};

export const HomeService = {
  findBoardsByUserId,
  createBoardByUserID,
};
