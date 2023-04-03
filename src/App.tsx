import { RouterPage } from '@page/Router';
import { Provider } from 'jotai';
import { queryClientAtom } from 'jotai-tanstack-query';
import { useHydrateAtoms } from 'jotai/react/utils';
import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

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

const HydrateAtoms: FC<PropsWithChildren> = ({ children }) => {
  useHydrateAtoms([[queryClientAtom, queryClient]]);

  return <>{children}</>;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <HydrateAtoms>
          <RouterPage />
        </HydrateAtoms>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
