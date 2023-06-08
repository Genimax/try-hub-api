import Router from "express";
import mainController from "./controllers/mainController.js";
import streamerController from "./controllers/streamerController.js";
import authChecker from "./middlware/authChecker.js";

const router = new Router();

// STATUS CHECKING
router.get("/", mainController);

// STREAMER CHECKING
router.post("/streamer", authChecker, streamerController);

export default router;
