// Libs
import {QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
// Shared
import {queryClient} from '@/shared/api/query-client';
import {darkTheme, GlobalStyles} from '@/shared/theme';
// Local
import {router} from './router';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>,
);
