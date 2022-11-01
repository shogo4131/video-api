import { Request, Response } from "express";
import User from "../models/user";
import * as bcrypt from "bcrypt";

type UserRequestPrams = {
  name: string;
  email: string;
  password: string;
};

export const signup = async (req: Request<UserRequestPrams>, res: Response) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const createUser = new User({ ...req.body, password: hash });

    await createUser.save();

    res.status(200).json({ code: 200, message: "success created user" });
  } catch (error) {
    console.log(error);
  }
};
