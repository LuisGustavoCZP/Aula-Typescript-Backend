import {CookieOptions} from "express";
import { CorsOptions } from "cors";
import dotenv from "dotenv";
import { env } from "process";
import { PoolConfig } from "pg";
dotenv.config();

const port = env.PORT;
const sqlConnection : PoolConfig = {
    user: env.DB_USERNAME!,
    host: env.DB_HOST!,
    database: env.DB_DATABASE!,
    password: env.DB_PASSWORD!,
    port: Number(env.DB_PORT)!,
};

const hashSecret= env.HASH_SECRET;

const corsOptions : CorsOptions = {
    origin:["http://127.0.0.1:5500"],
    credentials: true
};

export {port, sqlConnection, hashSecret, corsOptions};