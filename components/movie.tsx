"use client";

import Link from "next/link";
import styles from "@/app/styles/movie.module.css";
import { useRouter } from "next/navigation";


interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}
export default function Movie({ title, id, poster_path }: IMovieProps) {
  const route = useRouter();
  const onClick = () => {
    route.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}> {title}</Link>
    </div>
  );
}
