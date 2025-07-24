import databaseClient,{type Rows }  from "../../../database/client";

class client_gameRepository {
    async readAll() {
        const [rows] = await databaseClient.query("SELECT * FROM client_game");

        return rows;
    }

    async readById(id: string) {
  const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM client_game WHERE id = ?",
      [id],
    );

  return rows;
}
}

export default new client_gameRepository();