import styles from "./Movie.module.css";

export const Movie = ({ movie }) => {
  return (
    <div className={styles.movie}>
      <img
        className={styles.movieImage}
        src={movie?.images.posterArt.url}
        width={movie?.images.posterArt.width}
        height={movie?.images.posterArt.height}
      />
      <div className={styles.movieInfo}>
        <div className={styles.movieTitle}>{movie?.title}</div>
        <div className={styles.movieRelease}>{movie?.releaseYear}</div>
        <div className={styles.movieDescr}>{movie?.description}</div>
      </div>
    </div>
  );
};
