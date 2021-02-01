import { getRepository } from "typeorm";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";

import { token } from "../services/generateToken";

import { User } from "../entities/User";

// cria um usuario
export const createUser = async (req: Request, res: Response) => {
  const user = req.body;

  const passwordHash = await bcrypt.hash(user.password, 8);
  user.password = passwordHash;

  const userCreated = await getRepository(User).save(user);

  const tokenSession = await token(user.email);

  return res.status(201).json({ token: tokenSession, user: userCreated });
};

// get_user
export const getUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  const user = await getRepository(User).findOne(id);

  return res.status(200).json(user);
};

// update user by id
export const updateUser = async (req: Request, res: Response) => {
  const userUpdate = req.body;
  userUpdate.id = req.params.id;

  const results = await getRepository(User).update(userUpdate.id, userUpdate);

  if (results.affected === 0) {
    return res.status(404).json({ message: "error update user" });
  }

  const user = await getRepository(User).findOne(userUpdate.id);

  return res.status(200).json(user);
};
