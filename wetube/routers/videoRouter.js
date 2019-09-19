import express from "express";
import routers from "../routes";
import { videoDetail, editVideo, deleteVideo, video, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routers.videos, video);
videoRouter.get(routers.upload, getUpload);
videoRouter.post(routers.upload, postUpload);
videoRouter.get(routers.videoDetail(), videoDetail);
videoRouter.get(routers.editVideo, editVideo);
videoRouter.get(routers.deleteVideo, deleteVideo);

// videoRouter.js 전체를 export 해준다.
export default videoRouter;