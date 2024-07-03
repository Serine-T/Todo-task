import { forwardRef, memo } from 'react';

import { InputBaseProps } from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';

import { StyledBaseInput, StyledFormControl } from './styled';
import ErrorMessage from '../ErrorMessage';

export interface IBaseInputProps extends InputBaseProps {
  width?: string;
  errorMessage?: string;
}

const BaseInput = forwardRef(({
  inputProps,
  width,
  errorMessage,
  ...restProps
}: IBaseInputProps, ref) => (
  <Stack>
    <StyledFormControl width={width} variant="standard" error={!!errorMessage}>
      <StyledBaseInput
        inputRef={ref}
        inputProps={inputProps}
        {...restProps}
      />
    </StyledFormControl>
    {!!errorMessage && (
    <ErrorMessage message={errorMessage} />
    )}
  </Stack>
));

export default memo(BaseInput);
