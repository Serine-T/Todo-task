import { useAppSelector } from '@features/app/hooks';
import { useParams } from 'react-router-dom';
import { selectTasks } from '@features/tasks/selectors';
import EmptyState from '@containers/common/EmptyState';

import Form from '../common/Form';

const EditComponent = () => {
  const { id = '' } = useParams();
  const { tasks } = useAppSelector(selectTasks);

  const taskInfo = tasks.find((item) => item.id === id);

  return taskInfo
    ? <Form taskInfo={taskInfo} />
    : (<EmptyState text="There is no such a task" />);
};

export default EditComponent;
