import { RequestHandler } from "express";
import client_gameRepository from "./client_gameRepository";

const browse: RequestHandler = async(req, res) => {
    const result = await client_gameRepository.readAll();
    res.json(result);
}

const read: RequestHandler = async (req, res) => {
  try {
    const result = await client_gameRepository.readById(req.params.id);

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Client introuvable" });
    }
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};


export default { browse, read } ;