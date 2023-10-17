/*
 * @Author: wlj
 * @Date: 2022-10-21 09:20:10
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-21 11:40:53
 * @Description:
 */
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('@/views/Home'));
const Test = lazy(() => import('@/views/Test'));
const Pdf = lazy(() => import('@/views/Pdf'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/test',
    element: <Test />
  },
  {
    path: '/pdf',
    element: <Pdf />
  }
];

export default routes;
