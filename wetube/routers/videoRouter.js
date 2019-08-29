import express from "express";
import routers from "../routes";

const videoRouter = express.Router();

videoRouter.get(routers.videos, (req, res) => res.send("Video"));
videoRouter.get(routers.upload, (req, res) => res.send("Upload"));
videoRouter.get(routers.videoDetail, (req, res) => res.send("Video Detail"));
videoRouter.get(routers.editVideo, (req, res) => res.send("Edit Video"));
videoRouter.get(routers.deleteVideo, (req, res) => res.send("Delete Video"));

// videoRouter.js 전체를 export 해준다.
export default videoRouter;