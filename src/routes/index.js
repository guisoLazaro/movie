const { Router } = require("express");

const usersRouter = require("./user.routes");
const notesRouter = require("./movie.notes");
const tagsRouter = require("./movie.tags");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;