import { useState } from "react";
import "./MyVideoGames.css";

interface MyVideoGameProps {
  id: number;
  video_name: string;
  date_creation: string;
  type: string;
  client_game_id: number;
  onUpdate?: () => void; // Rafraîchir la liste des jeux depuis le parent
}

function MyVideoGames({
  id,
  video_name,
  date_creation,
  type,
  client_game_id,
  onUpdate,
}: MyVideoGameProps) {
  const [name, setName] = useState(video_name);
  const [date, setDate] = useState(date_creation);
  const [gameType, setGameType] = useState(type);

  const handleUpdate = () => {
    fetch(`http://localhost:3310/games/up_game/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        video_name: name,
        date_creation: date,
        type: gameType,
        client_game_id,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors de la mise à jour");
        return res.json();
      })
      .then(() => {
        alert("Jeu mis à jour avec succès !");
        if (onUpdate) onUpdate(); // Notifie le parent pour recharger les jeux
      })
      .catch((err) => {
        console.error("Erreur update :", err);
        alert("La mise à jour a échoué.");
      });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Supprimer ce jeu ?");
    if (!confirmDelete) return;

    fetch(`http://localhost:3310/games/delete_game/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors de la suppression");
        return res.json(); // S'assurer que la promesse est bien résolue
      })
      .then(() => {
        alert("Jeu supprimé avec succès !");
        if (onUpdate) onUpdate(); // Rafraîchit la liste après suppression
      })
      .catch((err) => {
        console.error("Erreur suppression :", err);
        alert("Échec de la suppression du jeu.");
      });
  };

  return (
    <section className="my-game-card">
      <article>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select value={gameType} onChange={(e) => setGameType(e.target.value)}>
          <option value="action">Action</option>
          <option value="RPG">RPG</option>
          <option value="FPS">FPS</option>
        </select>

        <button onClick={handleUpdate}>Mettre à jour</button>
        <button
          onClick={handleDelete}
          style={{ marginLeft: "1rem", color: "red" }}
        >
          Supprimer
        </button>
      </article>
    </section>
  );
}

export default MyVideoGames;
