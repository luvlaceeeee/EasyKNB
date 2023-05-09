import { useAuthStore } from '@/shared/store';
import { useQuery } from '@tanstack/react-query';
import { HomeService } from '../services/home.service';

export const useAllBoardData = () => {
  const userId = useAuthStore((state) => state.user.id);

  return useQuery({
    queryKey: ['query-boards', userId],
    queryFn: () => HomeService.findBoardsByUserId(userId),
  });
};
