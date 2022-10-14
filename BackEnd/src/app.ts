require("dotenv").config()
import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db";
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morganMiddleware";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());

const port = config.get<number>("port");

app.use(morganMiddleware)
app.use("/",router);
app.listen(port,async()=>{
    await db();
    Logger.info(`A aplicação está rodando na porta: ${port}`)
})