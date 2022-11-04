import mongoose, { Schema, Document } from "mongoose";

interface DocumentResult<T> extends Document {
  _doc: T;
}

interface UserDoc extends DocumentResult<UserDoc> {
  name: string;
  email: string;
  password: number;
  img: string;
  subscribers: string;
  subscribbedUsers: string[];
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribbedUsers: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model<UserDoc>("User", userSchema);
