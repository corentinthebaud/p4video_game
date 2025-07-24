import { useEffect, useState } from "react";
import "./SpacecClient.css";
import { Link } from "react-router";
import MyVideoGames from "../../components/MyVideoGames/MyVideoGames";

function SpaceClient() {
  const [client, setClient] = useState<ClientGame | null>(null);
  const [games, setGames] = useState<VideoGame[]>([]);
  const [loading, setLoading] = useState(true);

  // Fonction de chargement des jeux
  const fetchGames = (clientId: number) => {
    fetch(`http://localhost:3310/games/video_games/${clientId}`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) =>
        console.error("Erreur lors de la récupération des jeux :", err)
      );
  };

  useEffect(() => {
    fetch("http://localhost:3310/games/client_game/1")
      .then((res) => res.json())
      .then((data) => {
        const clientData = Array.isArray(data) ? data[0] : data;
        setClient(clientData);
        setLoading(false);

        if (clientData?.id) {
          fetchGames(clientData.id);
        }
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération du client :", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (!client) return <p>Client introuvable.</p>;

  return (
    <div>
      <section>
        <h1>Mon espace personnel</h1>
        <article>
          <p>Email : {client.email}</p>
          <p>Nom : {client.lastname}</p>
          <p>Prénom : {client.firstname}</p>
        </article>

        <section>
          <h2>Mes jeux-vidéos</h2>
          <article>
            {games.length > 0 ? (
              games.map((game) => (
                <MyVideoGames
                  key={game.id}
                  id={game.id}
                  video_name={game.video_name}
                  date_creation={game.date_creation}
                  type={game.type}
                  client_game_id={game.client_game_id}
                  onUpdate={() => fetchGames(client.id)} // Rafraîchir la liste des jeux
                />
              ))
            ) : (
              <p>Aucun jeu enregistré.</p>
            )}
          </article>
        </section>

        <Link to="/registration-game">
          <button type="button" className="new-game">
            Ajouter un jeu
          </button>
        </Link>
      </section>
    </div>
  );
}

export default SpaceClient;
