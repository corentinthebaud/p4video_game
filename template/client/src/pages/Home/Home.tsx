import { useEffect, useState } from "react";
import VideoGame from "../../components/VideoGame/VideoGame";
import "./Home.css";

function Home() {
  const [game, setGame] = useState<VideoGame[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/games/video_games")
      .then((res) => res.json())
      .then((data) => setGame(data));
  }, []);

  return (
    <div>
      <section>
        <h1>Les jeux vidéos enregistrés sur le site</h1>

        <article>
          {game.map((el) => (
            <VideoGame
              key={el.game_id}
              video_name={el.video_name}
              date_creation={el.date_creation}
              type={el.type}
            />
          ))}
        </article>
      </section>
    </div>
  );
}

export default Home;
