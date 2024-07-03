import { RootState } from '@features/app/store';

export const selectTasks = (state: RootState) => state.tasks;
