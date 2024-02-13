import express from "express";

const postsRouter = express.Router();

const postsMainPath = "/posts";

postsRouter
  .get("/", (req, res) => {
    res.send("Hello from postRoutes");
  })
  .post("/", (req, res) => {
    res.send("Hello from post postRoutes");
  })
  .get("/:id", (req, res) => {
    res.send("Hello from get one postRoutes");
  })
  .put("/:id", (req, res) => {
    res.send("Hello from put one postRoutes");
  })
  .delete("/:id", (req, res) => {
    res.send("Hello from delete one postRoutes");
  });

const postsRoutesInfos = [
  { path: `${postsMainPath}`, method: "GET", description: "Get all posts" },
  {
    path: `${postsMainPath}`,
    method: "POST",
    description: "Create a new post",
  },
  { path: `${postsMainPath}:id`, method: "GET", description: "Get one post" },
  {
    path: `${postsMainPath}:id`,
    method: "PUT",
    description: "Update one post",
  },
  {
    path: `${postsMainPath}:id`,
    method: "DELETE",
    description: "Delete one post",
  },
];

export { postsRoutesInfos, postsRouter, postsMainPath };
