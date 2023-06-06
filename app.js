import express from 'express';
import mongoose from 'mongoose';
import blogRouter from "./routes/blog-routes.js";
import router from './routes/user-routes.js';
import cors from 'cors';
import logger from 'morgan';
import path from "path";
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
app.get("*", (req,res,next) => {
    res.setHeader("Access-Control-Allow-Credentials", "true")
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

mongoose

    .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/BlogApp")
    .then(() => app.listen(process.env.PORT || 5000))
    .then(() => console.log("Connected to Database and Listening on PORT", process.env.PORT || 5000))
    .catch((err) => console.log(err));



