import { memo, useMemo } from 'react';

import StyledTable from '@containers/common/Table';
import { useAppSelector } from '@features/app/hooks';
import { selectTasks } from '@features/tasks/selectors';

import { headCells } from './headCells';
import TableRow from './TableRow';

interface ITasksTableProps{
  isTrash?: boolean;
}

const TasksTable = ({ isTrash }:ITasksTableProps) => {
  const { tasks, trash } = useAppSelector(selectTasks);
  const data = useMemo(() => (isTrash ? trash : tasks), [isTrash, tasks, trash]);

  return (
    <StyledTable headCells={isTrash ? headCells.slice(0, 5) : headCells}>
      { data.map((item) => (
        <TableRow key={item.id} {...item} isTrash={isTrash} />
      ))}
    </StyledTable>
  );
};

export default memo(TasksTable);
