import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({ movie }) {
  const imageURL = getMovieImg(movie.poster_path, 300)
  return (
    <li className={styles.movieCard}>
      <Link to={"/movie/" + movie.id}>
        <img
          height={345}
          width={230}
          className={styles.imageCard}
          src={imageURL}
          alt={imageURL.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
