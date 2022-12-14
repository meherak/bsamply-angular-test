import { Review } from './review';
export interface NytApiResponse {
  status: string;
  copyright: string;
  has_more: boolean;
  num_results: number;
  results: Review[];
}

export interface SearchParams {
  search: string;
  criticsPick: boolean;
  order: string;
}
