export const loadTasks = () => {
  try {
    const serializedState = localStorage.getItem('tasks');

    if (serializedState === null) {
      return [];
    }

    return JSON.parse(serializedState);
  } catch {
    return [];
  }
};

export const saveTasks = (tasks: any) => {
  try {
    const serializedState = JSON.stringify(tasks);

    localStorage.setItem('tasks', serializedState);
  } catch { }
};

export const loadTrash = () => {
  try {
    const serializedState = localStorage.getItem('trash');

    if (serializedState === null) {
      return [];
    }

    return JSON.parse(serializedState);
  } catch {
    return [];
  }
};

export const saveTrash = (trash: any) => {
  try {
    const serializedState = JSON.stringify(trash);

    localStorage.setItem('trash', serializedState);
  } catch { }
};
