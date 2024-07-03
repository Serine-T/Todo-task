import { memo } from 'react';

import { InputTypes, ValidFieldNames } from '@utils/types';
import { useFormContext } from 'react-hook-form';
import DatePicker from '@containers/common/DatePicker';

import Input from '../../Input';

function ReusableFields({ field, type, label }: ValidFieldNames) {
  const { formState: { errors }, register } = useFormContext();

  if (type === InputTypes.text) {
    return (
      <Input
        type="text"
        placeholder={label}
        {...register(field)}
        errorMessage={errors?.[field]?.message as string}
      />
    );
  }

  if (type === InputTypes.calendar) {
    return (
      <DatePicker
        name={field}
        errorMessage={errors?.[field]?.message as string}
      />
    );
  }

  return null;
}

export default memo(ReusableFields);
