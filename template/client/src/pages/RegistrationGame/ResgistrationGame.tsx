import { useState } from "react";
import "./RegistrationGame.css";

function RegistrationGame() {
  const [formData, setFormData] = useState({
    video_name: "",
    date_creation: "",
    type: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ici tu peux ajouter des validations si besoin

    fetch("http://localhost:3310/games/add_game", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors de l'ajout");
        return res.json();
      })
      .then(() => {
        alert("Jeu ajouté avec succès !");
        setFormData({ video_name: "", date_creation: "", type: "" }); // Reset form
      })
      .catch((err) => {
        console.error(err);
        alert("Erreur lors de l'ajout du jeu.");
      });
  };

  return (
    <div className="registration-game">
      <section>
        <h1>Ajouter vos jeux préférés</h1>
        <article>
          <form onSubmit={handleSubmit}>
            <label htmlFor="video_name" className="sr-only">
              Nom du jeu vidéo
            </label>
            <input
              id="video_name"
              name="video_name"
              type="text"
              placeholder="Nom du jeu vidéo"
              value={formData.video_name}
              onChange={handleChange}
              required
            />

            <label htmlFor="date_creation" className="sr-only">
              Date de sortie du jeu
            </label>
            <input
              id="date_creation"
              name="date_creation"
              type="text"
              placeholder="Date de sortie du jeu"
              value={formData.date_creation}
              onChange={handleChange}
              required
            />

            <label htmlFor="type" className="sr-only">
              Type de jeu
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">-- Choisir le type de jeu --</option>
              <option value="action">Action</option>
              <option value="RPG">RPG</option>
              <option value="FPS">FPS</option>
            </select>

            <button type="submit">Ajouter votre jeu</button>
          </form>
        </article>
      </section>
    </div>
  );
}

export default RegistrationGame;
