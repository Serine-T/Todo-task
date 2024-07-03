import PAGE_ROUTES from '@routes/routingEnum';

import { INavBarItem } from './types';

const navData: INavBarItem[] = [
  {
    id: 'tasks',
    title: 'Tasks',
    path: PAGE_ROUTES.TASKS,
  },
  {
    id: 'trash',
    title: 'Trash',
    path: PAGE_ROUTES.TRASH,
  },
];

export default navData;
