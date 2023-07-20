import { useSelector } from "react-redux";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import {
  IMovieDataStore,
  IMovieEntry,
  IMovieData,
} from "../../services/store/store.d";
import { Movie } from "../Movie/Movie";
import styles from "./MovieList.module.css";

const ITEMS_PER_PAGE = 10;

export const MovieList = () => {
  const movieData: IMovieData = useSelector(
    (state: IMovieDataStore) => state.movies.data
  );
  const items = [...movieData?.entries];
  items.sort((a: IMovieEntry, b: IMovieEntry) =>
    a.releaseYear > b.releaseYear ? -1 : a.releaseYear === b.releaseYear ? 0 : 1
  );

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / ITEMS_PER_PAGE);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % items.length;
    setItemOffset(newOffset);
  };

  let movieList: any = [];

  for (let i = 0; i < currentItems.length; i++) {
    movieList.push(<Movie key={i} movie={currentItems[i]} />);
  }

  return (
    <>
      <div className={styles.subtitleWrapper}>
        {!movieList.length ? <p className={styles.subtitleText}>NO MOVIES FOUND</p>
          : <p className={styles.subtitleText}>Popular Movies</p>}
      </div>
      <div className={styles.moviesGrid}>{movieList}</div>
      {!movieList.length ? null : (<ReactPaginate
        activeClassName={styles.paginateActive}
        className={styles.paginate}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={undefined}
      />)}
    </>
  );
};
