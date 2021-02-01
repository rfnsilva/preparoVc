import cors from "cors";
import { Router, Request, Response } from "express";

import { createUser, getUser, updateUser } from "./controllers/UserController";
import { session } from "./controllers/SessionController";

import { auth } from "./middlewares/auth";

const routes = Router();

routes.use(cors());

routes.get("/", (request: Request, response: Response) => {
  response.json({ message: "PRONTO CARALHOOOOO !" });
});

routes.post("/session", session);
routes.post("/createUser", createUser);

routes.use(auth);

routes.get("/getUser/:id", getUser);
routes.put("/updateUser/:id", updateUser);

export default routes;
