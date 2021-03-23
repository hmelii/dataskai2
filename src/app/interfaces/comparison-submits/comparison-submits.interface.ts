import { LoadStatusInterface } from '../load-status/load-status.interface';
import { SubmitInterface } from '../submit/submit.interface';

export interface ComparisonSubmitComparisonInterface {
  [key: string]: {
    [key: string]: number;
  };
}

export interface ComparisonSubmit extends SubmitInterface {
  comparison: ComparisonSubmitComparisonInterface | null;
}

export interface ComparisonSubmitsDataInterface {
  submits: ComparisonSubmit[];
}

export interface ComparisonSubmitsInterface extends LoadStatusInterface {
  data: ComparisonSubmitsDataInterface;
  meta: {
    baseline_submit: string;
  };
}
