import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { checkOverdueTasks } from '@features/tasks/slice';
import useMount from 'src/customHooks/useMount';
import { selectTasks } from '@features/tasks/selectors';
import { useAppSelector } from '@features/app/hooks';
import Table from '@containers/common/TodoCompnonents/TasksTable';
import EmptyState from '@containers/common/EmptyState';

import { StyledTitleBox } from '../common/TodoCompnonents/styled';

const TabsComponent = () => {
  const dispatch = useDispatch();
  const { trash } = useAppSelector(selectTasks);

  useMount(() => {
    dispatch(checkOverdueTasks());
  });

  return (
    <>
      <StyledTitleBox>
        <Typography variant="h4">Trash</Typography>
      </StyledTitleBox>
      {trash.length ? (
        <Table isTrash />
      ) : (
        <EmptyState text="There is no trash item" />
      )}
    </>
  );
};

export default TabsComponent;
