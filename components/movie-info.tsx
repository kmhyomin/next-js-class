import { API_URL } from "@/app/constans";
import styles from "@/app/styles/movieInfo.module.css";

export async function getMovie(id: string) {
  console.log(`fetching movies : ${Date.now}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt="" className={styles.poster} />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.info}>
          <h3>⭐ rating : {movie.vote_average.toFixed(1)} point</h3>
          <h3>🗳️ votes : {movie.vote_count}</h3>
          <p>over view : {movie.overview}</p>
          <a href={movie.homepage} target={"_blank"}>
            go to home page &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
