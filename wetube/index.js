import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Holle from my ass");

// 작성된 function이랑 같은 것이며, 더 세련되고 좋은 코딩법이다. 이걸 Javascript의 arrow function이라고 한다.
const handleProfile = (req, res) => res.send("You are on my profile");

/* middleware를 가지면서 우리는 요청과 응답 사이에서 여러 작업을 할 수 있다. 예를 들면 로그인 시 로그를 가져온다거나, 유저의 로그인 여부를 체크 할 수도있다. middleware를 사용할땐 꼭 next 인자가 필요하다.
const betweenHome = (req, res, next) => {
    console.log("between");
    next();
};

기본적으로 웹사이트에서 일어나는 모든 것에 대해 middleware 함수가 쓰여지게 할 것이다 이 app.use(betweenHome) 은!
app.use(betweenHome);*/


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);