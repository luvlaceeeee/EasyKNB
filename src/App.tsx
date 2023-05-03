import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';
import { RouterPage } from './modules/router/router-page';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
      suspense: true,
    },
  },
});

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterPage />
    </QueryClientProvider>
  );
};

export default App;
