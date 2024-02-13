import "./config.js";
import express from "express";
import endpointsInfosHTMLResponse from "./utils/endpointsInfosHTMLResponse.js";
import { postsRouter, postsMainPath } from "./routes/postsRoutes.js";

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use(postsMainPath, postsRouter);

app.get("/", endpointsInfosHTMLResponse);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} \n`);
});
