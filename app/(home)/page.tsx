import Movie from "@/components/movie";
import styles from "@/app/styles/home.module.css";
import { API_URL } from "../constans";

export const metadata = {
  title: "Home",
};

interface IMovie {
  id: string;
  title: string;
  poster_path: string;
}

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie: IMovie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
