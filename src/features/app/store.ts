import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tasks from '@features/tasks/slice';

import { loadTasks, loadTrash, saveTasks, saveTrash } from '../tasks/localStorageUtils';

const preloadedTasks = loadTasks();
const preloadedTrash = loadTrash();
const preloadedState = {
  tasks: {
    tasks: preloadedTasks,
    trash: preloadedTrash,
    isLoading: false,
    actionLoading: false,
  },
};

const store = configureStore({
  reducer: {
    tasks,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState().tasks;

  saveTasks(state.tasks);
  saveTrash(state.trash);
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
