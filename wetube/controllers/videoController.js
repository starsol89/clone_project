import {videos} from "../db"
import routes from "../routes"

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos});
};

export const search = (req, res) => {
    const { query: {term: searchingBy }} = req; // 이 줄의 내용과 const searchingBy = req.query.params는 같다.
    res.render("search", { pageTitle: "Search", searchingBy, videos});
} 

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload"});
export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(34245));
};

export const video = (req, res) => res.render("video", { pageTitle: "Video"});
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video"});