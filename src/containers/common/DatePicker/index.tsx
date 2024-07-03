import { ChangeEvent, memo, useRef } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormContext } from 'react-hook-form';
import { parseISO, isValid, format } from 'date-fns';
import Stack from '@mui/material/Stack';
import { dateFormat } from '@utils/constants';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import Input, { IBaseInputProps } from '../Input';

export interface IStyledDatePicker extends IBaseInputProps{
  name: string;
}

const StyledDatePicker = ({ name, ...props }: IStyledDatePicker) => {
  const { watch, setValue, register, formState: { isSubmitted } } = useFormContext();
  const watchedDate = watch(name);
  const datePickerRef = useRef<DatePicker>(null);
  const handleIconClick = () => {
    datePickerRef.current!.setFocus();
  };

  const handleDateChange = (date: Date | null) => {
    setValue(name, date ? date.toISOString() : '', { shouldValidate: isSubmitted });
  };

  const handleDateChangeRaw = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const parsedDate = parseISO(inputValue);

    if (isValid(parsedDate)) {
      setValue(name, format(parsedDate, dateFormat), { shouldValidate: isSubmitted });
    } else {
      setValue(name, '', { shouldValidate: isSubmitted });
    }
  };

  return (
    <Stack direction="row" alignItems="center" gap="10px">
      <Stack gap="5px">
        <DatePicker
          ref={datePickerRef}
          selected={watchedDate ? new Date(watchedDate) : null}
          customInput={(
            <Input
              {...register(name)}
              inputProps={{ placeholder: 'Date' }}
              {...props}
            />
)}
          onChange={handleDateChange}
          onChangeRaw={handleDateChangeRaw}
        />
      </Stack>
      <CalendarMonthIcon onClick={handleIconClick} />
    </Stack>
  );
};

export default memo(StyledDatePicker);
