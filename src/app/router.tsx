// Libs
import {createBrowserRouter} from 'react-router-dom';
// Pages
import {HomePage} from '@/pages/home';
import {SearchPage} from '@/pages/search';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/vehicle-value',
    element: <SearchPage />,
  },
]);
