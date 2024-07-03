import { memo } from 'react';

import { StyledTableCell, StyledTableRow } from '@containers/common/Table/styled';
import moment from 'moment';
import { dateFormat } from '@utils/constants';
import { ITask } from '@features/tasks/types';
import Text from '@containers/common/Text';

import ActionsCells from './components/ActionsCells';
import { gettingStatusColor } from './helpers';

interface ITableRow extends ITask {
  isTrash?: boolean;
}

const TableRow = ({ id, title, description, deadline, status, isTrash }: ITableRow) => ((
  <StyledTableRow>
    <StyledTableCell>{id}</StyledTableCell>
    <StyledTableCell>{title}</StyledTableCell>
    <StyledTableCell>{description}</StyledTableCell>
    <StyledTableCell>{deadline && moment(deadline).format(dateFormat)}</StyledTableCell>
    <StyledTableCell color="green">
      <Text color={gettingStatusColor(status)}>{status}</Text>
    </StyledTableCell>
    {!isTrash && <ActionsCells id={id} status={status} />}
  </StyledTableRow>
));

export default memo(TableRow);
