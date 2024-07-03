import { Navigate, RouteObject } from 'react-router-dom';
import NotFound from '@containers/NotFound';
import Tasks from '@containers/Tasks';
import AddTask from '@containers/Tasks/Actions/AddComponent';
import EditTask from '@containers/Tasks/Actions/EditComponent';
import Layout from '@containers/Layout';
import Trash from '@containers/Trash';

import PAGE_ROUTES from './routingEnum';

export const routingArray: RouteObject[] = [
  { path: PAGE_ROUTES.NOT_FOUND, element: <NotFound /> },
  { path: PAGE_ROUTES.HOME, element: <Navigate to={PAGE_ROUTES.TASKS} /> },
  {
    element: <Layout />,
    children: [
      {
        path: PAGE_ROUTES.TASKS,
        children: [
          { element: <Tasks />, index: true },
          { path: PAGE_ROUTES.ADD_TASK, element: <AddTask /> },
          { path: PAGE_ROUTES.EDIT_TASK, element: <EditTask /> },
        ],
      },
      {
        path: PAGE_ROUTES.TRASH,
        children: [
          { element: <Trash />, index: true },
        ],
      },
    ],
  },
];
