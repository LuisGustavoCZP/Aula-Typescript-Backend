import dotenv from "dotenv";
import { CookieOptions } from "express";
import { CorsOptions } from "cors";
import { env } from "process";
import { PoolConfig } from "pg";
import { genSaltSync } from "bcrypt";
import { Database, Postgres } from "../clients";

dotenv.config();

const port = env.PORT;
const hashSecret = genSaltSync(10);

const databaseConfig : PoolConfig = 
{
    host:env.DB_HOST,
    port:Number(env.DB_PORT),
    database:env.DB_DATABASE,
    user:env.DB_USER,
    password:env.DB_PASSWORD
}

const database : Database = new Postgres();

const corsOptions : CorsOptions = 
{
    origin:["http://127.0.0.1:5500"],
    credentials: true
};

export {port, databaseConfig, database, corsOptions, hashSecret};