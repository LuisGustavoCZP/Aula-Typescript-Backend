import express from "express";
import { settings } from "./base";
import cookieParser from 'cookie-parser';
import cors from "cors";
import {router} from "./base";

class App
{
    app : express.Application
    constructor ()
    {
        this.app = express();

        this.app.use(cookieParser());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true}));
        this.app.use(cors(settings.corsOptions));

        this.app.use(router);
        
        this.app.listen(settings.port, () => console.log(`Servidor rodando em: http://localhost:${settings.port}`));
    }
}

const app = new App ();
