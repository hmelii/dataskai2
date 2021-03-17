import { TaskInterface } from '../task/task.interface';

export interface ProjectTasksDataInterface {
  project_name: string;
  tasks: TaskInterface[];
}

export interface ProjectTasksMetaSearchMatchInterface {
  matched_row: { [key: string]: string };
  matched_columns: string[];
}

export interface ProjectTasksMetaInterface {
  total_pages: number;
  current_page: number;
  per_page: number;
  sort_column: string;
  sort_order: string;
  search_matches: ProjectTasksMetaSearchMatchInterface[];
}

export interface ProjectTasksInterface {
  data: ProjectTasksDataInterface;
  meta: ProjectTasksMetaInterface;
}
