import "./VideoGame.css";

interface VideoGameProps {
  video_name: string;
  date_creation: string;
  type: string;
}

function VideoGame({ video_name, date_creation, type }: VideoGameProps) {
  return (
    <section>
      <figcaption>
        <h2>{video_name}</h2>
        <p>{date_creation}</p>
        <p>{type}</p>
      </figcaption>
    </section>
  );
}

export default VideoGame;
