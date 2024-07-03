export enum InputTypes {
  text = 'text',
  calendar = 'calendar'
}

export type ValidFieldNames = {
  label: string;
  field:string;
  type: InputTypes;
  isRequired?: boolean;
}
