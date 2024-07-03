import * as yup from 'yup';

export const createRequiredTextWidthValidation = (fieldName: string, maxLength: number) => {
  return yup.string().required(`${fieldName} is required`)
    .max(maxLength, `The maximum length is ${maxLength} characters`);
};

export const createTextWidthValidation = (maxLength: number) => {
  return yup.string().optional().test(
    'text-length-validation',
    `The maximum length is ${maxLength} characters`,
    (value: string | undefined) => {
      if (!value) {
        return true;
      }

      return yup.string().max(maxLength).isValidSync(value);
    },
  );
};

// Date validation schema
const maxYear = 2150;
const maxDate = new Date(maxYear, 11, 31);
const minDate = new Date();

export const dateSchema = (fieldName: string, isRequired: boolean) => {
  let schema = yup.date()
    .nullable()
    .max(maxDate, `${fieldName}  is after  ${maxYear + 1}`)
    .min(minDate, `${fieldName} cannot be before ${minDate.toLocaleDateString()}`)
    .transform((value, originalValue) =>
      (originalValue === '' || originalValue === null ? null : value));

  if (isRequired) {
    schema = schema.required(`${fieldName} is required`);
  }

  return schema as yup.DateSchema<Date | undefined, Record<string, any>, undefined>;
};
