export interface MovieDBResponse {
  page: number;
  results: MovieDB[];
  total_pages: number;
  total_results: number;
}

export interface MovieDBNowPlayingResponse {
  dates: MovieDBDates;
  page: number;
  results: MovieDB[];
  total_pages: number;
  total_results: number;
}

export interface MovieDBDates {
  maximum: string;
  minimum: string;
}

export interface MovieDB {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];

  id: number;
  title: string;

  original_title: string;
  original_language: string;

  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;

  video: boolean;
  vote_average: number;
  vote_count: number;
}
