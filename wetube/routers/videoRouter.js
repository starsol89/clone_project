import express from "express";
import routers from "../routes";
import { upload, videoDetail, editVideo, deleteVideo, video } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routers.videos, video);
videoRouter.get(routers.upload, upload);
videoRouter.get(routers.videoDetail, videoDetail);
videoRouter.get(routers.editVideo, editVideo);
videoRouter.get(routers.deleteVideo, deleteVideo);

// videoRouter.js 전체를 export 해준다.
export default videoRouter;