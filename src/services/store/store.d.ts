export interface IMovieData {
  total: number;
  entries: Array<IMovieEntry>;
}

export interface IMovieEntry {
  title: string;
  description: string;
  releaseYear: number;
  images: {
    posterArt: {
      url: string;
      width: number;
      height: number;
    }
  }
}

export interface IMovieDataStoreMovies {
  initial: IMovieData;
  data: IMovieData;
}

export interface IMovieDataStore {
  movies: IMovieDataStoreMovies;
}

export interface IAction {
  type: string;
  payload: any;
}
