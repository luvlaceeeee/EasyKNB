import $api from '../../../shared/API/axiosConfig';
import { IBoard } from '../../../shared/types/IBoard';

const findBoardByUserId = async (
  userId: number,
  boardId: number | string | undefined
) => {
  const { data } = await $api.get<IBoard>(`/boards/${boardId}`, {
    params: {
      userId: userId,
    },
  });
  return data;
};

const BoardService = {
  findBoardByUserId,
};

export default BoardService;
