export interface Task {
  id: number;
  title: string;
  description: string;
  progress: 'fazer' | 'fazendo' | 'feito';
  priority: boolean;
  dateToComplete: string;
}
