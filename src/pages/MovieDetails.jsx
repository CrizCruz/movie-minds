import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import style from "./MovieDetails.module.css";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";


export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState(null);



  useEffect(
    () => {
      setIsLoading(true)
      get("/movie/" + movieId).then((data) => {
        setIsLoading(false)
        setMovie(data);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    { movieId }
  );


  if (isLoading) {
    return <Spinner/>
  }
  const imageURL = getMovieImg(movie.poster_path, 300)
  return (
    <div className={style.detailsContainer}>
      <img
        className={`${style.col} ${style.movieImage}`}
        src={imageURL}
        alt={movie.title}
      />
      <div className={`${style.col} ${style.movieDetails}`}>
        <p>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
        <p>
          <strong>Rate: </strong> {movie.vote_average}
        </p>
      </div>
    </div>
  );
}
