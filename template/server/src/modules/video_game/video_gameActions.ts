import { RequestHandler } from "express";
import video_gameRepository from "./video_gameRepository";

const browse: RequestHandler = async(req, res) => {
    const result = await video_gameRepository.readAll();
    res.json(result);
};

const read: RequestHandler = async(req,res) => {
      try {
        const result = await video_gameRepository.readById(req.params.id);

    if (result) {
      res.json(result);
    } else {
      res.status(404).send("pas de jeux trouvé");
    }
  } catch (err) {
    res.status(500);
  }
};

const destroy: RequestHandler = async(req,res) => {
    try {
  const deleteVideo_game= await video_gameRepository.delete(req.params.id);

  if (deleteVideo_game) {
    res.status(200).json("A profile game has been successfully deleted !");
  } else {
    res.status(404).json("Impossible to delete a this game");
  }
  } catch (err) {
    res.status(500);
}
    };


const add: RequestHandler = async (req,res) => {
    try {
        const addGame = await video_gameRepository.create(req.body);
    if (addGame) {
      res.status(201).json("Congratulations, your game has been created");
    } else {
      res
        .status(400)
        .json({ error: "Something went wrong during registration" });
    }

    } catch {
        res.status(500);

    } 

}

 const edit: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.status(400).json({ error: "Missing game ID in URL" });
      return;
    }

    const updatedRows = await video_gameRepository.update(req.body, id);

    if (updatedRows > 0) {
      res.status(200).json(`${req.body.video_name} has been updated successfully`);
    } else {
      res.status(404).json("This game doesn't exist");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
}


   

export default { browse, read, destroy, add , edit } ;