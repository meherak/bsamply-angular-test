export enum Order {
  oDate = 'by-opening-date',
  pDate = 'by-publication-date',
}

export interface SearchParams {
  search?: string;
  criticsPick?: boolean;
  order?: string;
  offset?: number;
}
