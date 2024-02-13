import "./config.js";
import express from "express";
import logEndpoints from "./utils/logEndpoints.js";

const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} \n`);
  logEndpoints(app, port);
});
