import databaseClient,{Result, type Rows }  from "../../../database/client";

class video_gameRepository {
    async readAll() {
        const [rows] = await databaseClient.query("SELECT * FROM video_game");

        return rows;
    }

    async readById(id: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM video_game WHERE client_game_id = ?",
      [id],
    );

    return rows;
  }

  async delete(id: string) {
    const [result] = await databaseClient.query<Result>("DELETE FROM video_game WHERE id = ?",
      [id],);
      return result.affectedRows;
  }

  async create(body: Video_game) {
    const [newGame] = await databaseClient.query<Result>("INSERT INTO video_game(video_name, date_creation, type, client_game_id) VALUES(?,?,?,?)", [body.video_name, body.date_creation, body.type, body.client_game_id],);
    return newGame.affectedRows;
  }

  async update(body: Video_game, id: string) {
  const [result] = await databaseClient.query<Result>(
    "UPDATE video_game SET video_name = ?, date_creation = ?, type = ?, client_game_id = ? WHERE id = ?",
    [body.video_name, body.date_creation, body.type, body.client_game_id, id]
  );
  return result.affectedRows;
}
}

export default new video_gameRepository();