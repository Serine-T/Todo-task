import { memo } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledStack } from '@containers/common/TodoCompnonents/StyledActionsForm/styled';
import TitlesWithBackButton from '@containers/common/TitlesWithBackButton';
import PAGE_ROUTES from '@routes/routingEnum';
import ReusableFields from '@containers/common/FormField/ReusableFields';
import { useNavigate } from 'react-router-dom';
import RowComponent from '@containers/common/FormField';
import { ITask } from '@features/tasks/types';
import { useAppDispatch } from '@features/app/hooks';
import { addTask, editTask } from '@features/tasks/slice';
import Button from '@containers/common/Button';
import Stack from '@mui/material/Stack';

import { AddDataSchema, IAddDataForm, inputsRows, defaultValues } from './helpers';

interface IInputsTable{
  taskInfo?: ITask;
}

const InputsTable = ({ taskInfo }: IInputsTable) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const methods = useForm<IAddDataForm>({
    resolver: yupResolver(AddDataSchema as any), // TODO
    defaultValues: taskInfo ?? defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: IAddDataForm) => {
    dispatch(taskInfo ? editTask(data) : addTask(data));
    navigate(PAGE_ROUTES.TASKS);
  };

  return (
    <TitlesWithBackButton
      title={taskInfo ? 'Edit Task' : 'Add Task'}
      path="TASKS"
    >
      <FormProvider {...methods}>
        <StyledStack
          onSubmit={handleSubmit(onSubmit)}
          component="form"
        >
          <Stack mb="30px">
            {inputsRows.map((item) => (
              <RowComponent key={item.label} {...item}>
                <ReusableFields {...item} />
              </RowComponent>
            ))}
          </Stack>
          <Button type="submit">Submit</Button>
        </StyledStack>
      </FormProvider>
    </TitlesWithBackButton>
  );
};

export default memo(InputsTable);
