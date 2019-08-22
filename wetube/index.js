import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Holle from my ass");

// 작성된 function이랑 같은 것이며, 더 세련되고 좋은 코딩법이다. 이걸 Javascript의 arrow function이라고 한다.
const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);