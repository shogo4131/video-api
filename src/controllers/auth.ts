import { Request, Response } from "express";
import User from "../models/user";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// TODO: エラーハンドリング追加、リクエスト型修正
export const signup = async (req: Request, res: Response) => {
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

export const signin = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ name: req.body.name });

    if (!user) return res.status(400).json({ message: "Not fount user" });

    const isPasswordCheck = bcrypt.compare(
      req.body.password,
      user.password.toString()
    );

    if (!isPasswordCheck) {
      return res.status(400).json({ message: "Password do not match" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT || "");
    const { password, ...others } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ code: 200, others });
  } catch (error) {
    console.error(error);
  }
};

// TODO: signout API
