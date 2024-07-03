export interface IState {
  isLoading: boolean;
  actionLoading: boolean;
  tasks: ITask[];
  trash: ITask[];
}

export interface ITask {
  id: string;
  title: string;
  description?: string;
  deadline?: string;
  status: 'Pending' | 'Completed' | 'Overdue' | 'Removed';
}
