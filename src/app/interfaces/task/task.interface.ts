import { SubmitInterface } from '../submit/submit.interface';
import { LoadStatusInterface } from '../load-status/load-status.interface';

export interface TaskConfigColumnInterface {
  id: string;
  name: string;
  type: string;
  sortable: boolean;
  shown: boolean;
  index: number;
}

export interface TaskConfigDataInterface {
  task_name: string;
  columns: TaskConfigColumnInterface[];
  rows_per_page_values: number[];
  rows_per_page_default: number;
  description_language_default: string;
}

export interface TaskConfigInterface {
  data: TaskConfigDataInterface;
  loading: boolean;
  loaded: boolean;
}

export interface TaskSubmitsMetaSearchMatchesInterface {
  matched_row: {
    [key: string]: string;
  };
  matched_columns: string[];
}

export interface TaskSubmitsMeta {
  total_pages: number;
  current_page: number;
  per_page: number;
  sort_order: string;
  sort_column: string;
  search_matches: TaskSubmitsMetaSearchMatchesInterface[];
}

export interface TaskSubmitsInterface {
  data: {
    task_name: string;
    submits: SubmitInterface[];
  };
  meta: TaskSubmitsMeta;
  loaded: boolean;
  loading: boolean;
}

export interface TaskInterface {
  task_name: string;
  features: number;
  submits_active: number;
  submits_new: number;
  submits_favorite: number;
  trash: number;
  comments_to_submits: number;
  metrics: string[];
  authors: string[];
  date_of_last_submit: string;
  comment_to_task: string;
  metrics_service_status: string;
}

export interface TaskInfoDataTaskDescriptionInterface {
  [key: string]: string[];
}

export interface TaskInfoDataInterface {
  task_name: string;
  task_description: TaskInfoDataTaskDescriptionInterface;
  authors: string[];
  submits: number;
  favorite_submits: number;
  hidden_submits: number;
  comments: number;
  metrics_service_status: string;
}

export interface TaskInfoInterface extends LoadStatusInterface {
  data?: TaskInfoDataInterface;
}
