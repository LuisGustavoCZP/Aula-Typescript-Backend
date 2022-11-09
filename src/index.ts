import express from "express";
import cookieParser from 'cookie-parser';
import cors from "cors";
import {port, corsOptions} from "./configs";
import router from "./routes";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors(corsOptions));

app.use(router);

app.listen(port, () => {console.log(`Server started: http://localhost:${port}/`)});