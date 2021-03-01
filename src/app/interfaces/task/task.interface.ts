export interface TaskConfigColumnsInterface {
  id: string;
  name: string;
  type: string;
  sortable: boolean;
}

export interface TaskConfigDataInterface {
  task_name: string;
  columns: TaskConfigColumnsInterface[];
  rows_per_page_values: number[];
  rows_per_page_default: number;
  description_language_default: string;
}

export interface TaskConfigInterface {
  data: TaskConfigDataInterface;
}
