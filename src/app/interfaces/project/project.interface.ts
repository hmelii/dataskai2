import { TaskInterface } from '../task/task.interface';
import { LoadStatusInterface } from '../load-status/load-status.interface';

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

export interface ProjectTasksInterface extends LoadStatusInterface {
  data?: ProjectTasksDataInterface;
  meta?: ProjectTasksMetaInterface;
}

export interface ProjectInfoDataDescriptionInterface {
  [key: string]: string;
}

export interface ProjectInfoDataTasksInterface {
  count: number;
  names: string[];
}

export interface ProjectInfoDataInterface {
  project_name: string;
  project_description: ProjectInfoDataDescriptionInterface;
  authors: string[];
  tasks: ProjectInfoDataTasksInterface;
  favorite_submits: number;
}

export interface ProjectInfoInterface extends LoadStatusInterface {
  data?: ProjectInfoDataInterface;
}

export interface ProjectConfigDataColumnInterface {
  id: string;
  name: string;
  type: string;
  sortable: boolean;
}

export interface ProjectConfigDataInterface {
  project_name: string;
  columns: ProjectConfigDataColumnInterface[];
  rows_per_page_values: number[];
  rows_per_page_default: number;
  description_language_default: string;
}

export interface ProjectConfigInterface extends LoadStatusInterface {
  data?: ProjectConfigDataInterface;
}
