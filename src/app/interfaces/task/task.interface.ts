import { SubmitInterface } from '../submit/submit.interface';

export interface TaskConfigColumnInterface {
  id: string;
  name: string;
  type: string;
  sortable: boolean;
  isHidden: boolean;
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
  submit_id: string;
  matched_columns: string[];
}

export interface TaskSubmitsMeta {
  total_pages: number;
  current_page: number;
  per_page: number;
  sort_order: string;
  submits_search_matches: TaskSubmitsMetaSearchMatchesInterface[];
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
