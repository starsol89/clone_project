import {videos} from "../db"

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos});
};

export const search = (req, res) => {
    const { query: {term: searchingBy }} = req; // 이 줄의 내용과 const searchingBy = req.query.params는 같다.
    res.render("search", { pageTitle: "Search", searchingBy, videos});
} 

export const upload = (req, res) => res.render("upload", { pageTitle: "Upload"});
export const video = (req, res) => res.render("video", { pageTitle: "Video"});
export const videoDetail = (req, res) => res.render("video Detail", { pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("edit Video", { pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("delete Video", { pageTitle: "Delete Video"});