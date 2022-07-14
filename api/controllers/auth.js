import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password.toString(), salt);

    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    const createdUser = await newUser.save();
    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "user not found in the database"));
    } else {
      const passwordMatch = await bcrypt.compare(
        req.body.password.toString(),
        user.password
      );
      if (!passwordMatch) {
        return next(createError(400, "passwords do not match"));
      } else {
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT_SECRET
        );
        const { password, isAdmin, ...others } = user._doc;
        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({ ...others, token });
      }
    }
  } catch (error) {
    next(error);
  }
};
