import { useEffect } from 'react';

import Button from '@containers/common/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import PAGE_ROUTES from '@routes/routingEnum';
import { checkOverdueTasks } from '@features/tasks/slice';
import { StyledTitleBox } from '@containers/common/TodoCompnonents/styled';
import { useAppDispatch, useAppSelector } from '@features/app/hooks';
import { selectTasks } from '@features/tasks/selectors';
import TasksTable from '@containers/common/TodoCompnonents/TasksTable';
import EmptyState from '@containers/common/EmptyState';

const TabsComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const { tasks } = useAppSelector(selectTasks);

  useEffect(() => {
    dispatch(checkOverdueTasks());
  }, [pathname, dispatch]);

  const handleAdd = () => navigate(PAGE_ROUTES.ADD_TASK);

  return (
    <>
      <StyledTitleBox>
        <Typography variant="h4">Tasks</Typography>
        <Button width="auto" onClick={handleAdd}>Add Task</Button>
      </StyledTitleBox>
      {tasks.length ? (
        <TasksTable />
      ) : (
        <EmptyState text="There is no task. Please add a new one to proceed" />
      )}
    </>
  );
};

export default TabsComponent;
