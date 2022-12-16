import { Review } from '../interfaces';

export class NytApiResponse {
  status: string;
  copyright: string;
  has_more: boolean;
  num_results: number;
  results: Review[];
}
