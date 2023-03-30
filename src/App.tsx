import { QueryClient, QueryClientProvider } from 'react-query';
import RouterPage from './page/Router/components/RouterPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterPage />
    </QueryClientProvider>
  );
};

export default App;
