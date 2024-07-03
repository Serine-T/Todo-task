import { createSlice } from '@reduxjs/toolkit';

import { IState } from './types';

const tasks = localStorage.getItem('tasks');
const trash = localStorage.getItem('trash');
const initialState: IState = {
  isLoading: false,
  actionLoading: false,
  tasks: tasks ? JSON.parse(tasks) : [],
  trash: trash ? JSON.parse(trash) : [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({ id: new Date().getTime().toString(), ...payload, status: 'Pending' });
    },

    removeTask: (state, { payload }) => {
      const index = state.tasks.findIndex((task) => task.id === payload);

      if (index !== -1) {
        const [removedTask] = state.tasks.splice(index, 1);

        removedTask.status = 'Removed';
        state.trash.push(removedTask);
      }
      // const newList = state.tasks.filter((item) => item.id !== payload);

      // state.tasks = newList;
    },

    editTask: (state, { payload }) => {
      const newList = state.tasks.map((item) => {
        if (item.id === payload.id) {
          return ({
            ...payload,
          });
        }

        return item;
      });

      state.tasks = newList;
    },

    markTaskAsCompleted(state, { payload }) {
      const task = state.tasks.find((item) => item.id === payload);

      if (task && task.status !== 'Overdue') {
        task.status = 'Completed';
      }
    },

    checkOverdueTasks(state) {
      const now = new Date().toISOString();

      state.tasks.forEach((task) => {
        if (task.deadline && task.deadline < now) {
          task.status = 'Overdue';
        } else if (task.status === 'Overdue') {
          task.status = 'Pending';
        }
      });
    },
  },
});

export const { addTask, removeTask, editTask, checkOverdueTasks, markTaskAsCompleted } = tasksSlice.actions;

export default tasksSlice.reducer;
