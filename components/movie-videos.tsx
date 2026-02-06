import { API_URL } from "@/app/constans";
import styles from "@/app/styles/movieVideos.module.css";

async function getVidieos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

interface IMovieVideoprops {
  name: string;
  id: string;
  key: string;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVidieos(id);
  return (
    <div className={styles.container}>
      {videos.map((video: IMovieVideoprops) => (
        <iframe
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
        ></iframe>
      ))}
    </div>
  );
}
