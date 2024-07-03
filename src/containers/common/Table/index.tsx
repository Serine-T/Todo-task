import { ReactNode, memo } from 'react';

import { TableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';

import { StyledMuiTable, StyledTableContainer, StyledTableRow } from './styled';
import { ITableHeadCell } from './helpers';
import Text from '../Text';

interface IStyledTable extends TableProps {
  headCells?: ITableHeadCell[];
  children: ReactNode;
 }

const StyledTable = ({ headCells, children }: IStyledTable) => {
  return (
    <>
      <StyledTableContainer>
        <StyledMuiTable>
          <TableHead>
            <StyledTableRow>
              {headCells?.map((props) => {
                const { label } = props;

                return (
                  <TableCell key={label} {...props}>
                    <Text textTransform="uppercase" color="white" align="center">
                      {label}
                    </Text>
                  </TableCell>
                );
              })}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {children}
          </TableBody>
        </StyledMuiTable>
      </StyledTableContainer>
    </>
  );
};

export default memo(StyledTable);
