import { Layout } from '@src/components';
import { ROUTES } from '@src/constants';
import { Blog, Career, Home, Projects } from '@src/pages';
import { createBrowserRouter, Navigate, Outlet } from 'react-router';
import { RouterProvider as ReactRouterProvider } from 'react-router/dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: ROUTES.INDEX,
          element: <Home />,
        },
        {
          path: ROUTES.CAREER,
          element: <Career />,
        },
        {
          path: ROUTES.PROJECTS,
          element: <Projects />,
        },
        {
          path: ROUTES.BLOG,
          element: <Blog />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to={ROUTES.INDEX} />,
    },
  ],
);

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};
