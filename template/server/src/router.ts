import express from "express";

const router = express.Router();

import client_gameActions from "./modules/client_game/client_gameActions";
import video_gameActions from "./modules/video_game/video_gameActions";

router.get("/client_games", client_gameActions.browse);
router.get("/client_game/:id", client_gameActions.read);

router.get("/video_games", video_gameActions.browse);
router.get("/video_games/:id", video_gameActions.read);
router.delete("/delete_game/:id", video_gameActions.destroy);
router.post("/add_game", video_gameActions.add);
router.put("/up_game/:id", video_gameActions.edit);



export default router;
