export interface Link {
  type: string;
  url: string;
  suggested_link_text: string;
}

export interface MultiMedia {
  type: string;
  src: string;
  height: number;
  width: number;
}

export interface Review {
  display_title: string;
  mpaa_rating: string;
  critics_pick: number;
  byline: string;
  headline: string;
  summary_short: string;
  publication_date: Date;
  opening_date: Date;
  date_updated: Date;
  link: Link;
  multimedia: MultiMedia;
}
