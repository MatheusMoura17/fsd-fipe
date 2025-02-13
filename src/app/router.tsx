// Libs
import {createHashRouter} from 'react-router-dom';
// Pages
import {HomePage} from '@/pages/home';
import {SearchPage} from '@/pages/search';
import {VehicleValue} from '@/pages/vehicle-value';

export const router = createHashRouter([
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
    element: <VehicleValue />,
  },
]);

console.log(import.meta.env.BASE_URL);
