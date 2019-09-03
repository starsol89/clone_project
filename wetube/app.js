import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// import { userRouter } from "./routers/userRouter"; router.js 에서 만들어진 userRouter를 import 해준것.
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

/*
const handleHome = (req, res) => res.send("Holle from my ass");

// 작성된 function이랑 같은 것이며, 더 세련되고 좋은 코딩법이다. 이걸 Javascript의 arrow function이라고 한다.
const handleProfile = (req, res) => res.send("You are on my profile");

// middleware를 가지면서 우리는 요청과 응답 사이에서 여러 작업을 할 수 있다. 예를 들면 로그인 시 로그를 가져온다거나, 유저의 로그인 여부를 체크 할 수도있다. middleware를 사용할땐 꼭 next 인자가 필요하다.
const betweenHome = (req, res, next) => {
    console.log("between");
    next();
};

기본적으로 웹사이트에서 일어나는 모든 것에 대해 middleware 함수가 쓰여지게 할 것이다 이 app.use(betweenHome) 은!
app.use(betweenHome);*/
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// 누군가 내 파일을 불러올때(import) app object를 주겠다는 의미다.
// 그럼 app object가 뭐냐면 위에 app.으로 시작되는 모든 것들이며 우리가 설정한 것을 의미한다.
export default app;