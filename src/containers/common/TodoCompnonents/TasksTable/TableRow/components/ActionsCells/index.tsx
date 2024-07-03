import { ITask } from '@features/tasks/types';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DoneIcon from '@mui/icons-material/Done';
import ModeEditIcon from '@mui/icons-material/ModeEditOutline';
import { useConfirm } from 'material-ui-confirm';
import confirmOptionsDialog from '@containers/common/Confirm';
import { useNavigate } from 'react-router-dom';
import { StyledTableCell } from '@containers/common/Table/styled';
import { markTaskAsCompleted, removeTask } from '@features/tasks/slice';
import { useAppDispatch } from '@features/app/hooks';

interface IActionsCells {
    status: ITask['status'];
    id: string;
}

const ActionsCells = ({ id, status }: IActionsCells) => {
  const confirm = useConfirm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const deleteAction = () => {
    dispatch(removeTask(id));
  };

  const handleEdit = () => navigate(`/tasks/edit/${id}`);
  const handleDelete = async () => {
    try {
      await confirm(confirmOptionsDialog({ questionText: 'Are you sure you want to delete this task ?' }));
      await deleteAction();
    } catch { }
  };

  const handleComplete = () => {
    dispatch(markTaskAsCompleted(id));
  };

  return (
    <>
      <StyledTableCell>
        {status !== 'Overdue' && status !== 'Completed' && (
        <DoneIcon color="success" onClick={handleComplete} cursor="pointer" />
        )}
      </StyledTableCell>
      <StyledTableCell>
        <ModeEditIcon onClick={handleEdit} cursor="pointer" />
      </StyledTableCell>
      <StyledTableCell>
        <DeleteOutlineIcon color="error" onClick={handleDelete} cursor="pointer" />
      </StyledTableCell>
    </>
  );
};

export default ActionsCells;
