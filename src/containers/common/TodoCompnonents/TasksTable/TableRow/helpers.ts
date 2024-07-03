import { ITask } from '@features/tasks/types';
import theme from '@styles/theme';

export const gettingStatusColor = (status: ITask['status']) => {
  const colorObj:Record<string, string> = {
    Pending: theme.palette.info.main,
    Completed: theme.palette.success.light,
    Overdue: theme.palette.error.main,
    Removed: theme.palette.grey[500],
  };

  return colorObj[status];
};
