import { MetricInterface } from '../metric/metric.interface';

export interface SubmitAttachmentsFileInterface {
  name: string;
  download_path: string;
}

export interface SubmitAttachmentsInterface {
  notebook: boolean;
  other_files: number;
  attachments_download_path: string;
  files: SubmitAttachmentsFileInterface[];
}

export interface SubmitInterface {
  id: string;
  favorite: boolean;
  metrics: {
    [key: string]: MetricInterface;
  };
  model_name: string;
  model_version: string;
  features: {
    count: number;
    names: string[];
  };
  author: string;
  tags: string;
  attachments: SubmitAttachmentsInterface;
  hidden: boolean;
  comment: string;
  created: string;
}
