import { createRequiredTextWidthValidation, createTextWidthValidation, dateSchema } from '@utils/schemas';
import { InputTypes, ValidFieldNames } from '@utils/types';
import * as yup from 'yup';

export interface IAddDataForm {
  id?: string;
  title: string;
  description?: string;
  deadline?: string;
}

export const defaultValues = {
  title: '',
  description: '',
  deadline: '',
};

export const AddDataSchema = yup.object().shape({
  title: createRequiredTextWidthValidation('Title', 255),
  description: createTextWidthValidation(255),
  deadline: dateSchema('Deadline', true),
});

export const inputsRows: ValidFieldNames[] = [
  {
    label: 'Title',
    field: 'title',
    type: InputTypes.text,
    isRequired: true,
  },
  {
    label: 'Description',
    field: 'description',
    type: InputTypes.text,
  },
  {
    label: 'Deadline',
    field: 'deadline',
    type: InputTypes.calendar,
  },
];
