import type { RouteObject } from 'react-router';
import MainLayout from '@/layouts/Default';
import Home from '@/pages/index/index'
import Pokemon from '@/pages/pokemon/index'

const routes: RouteObject[] = [
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: false,
        path: ':id',
        element: <Pokemon />
      }
    ],
  },
];

export default routes;