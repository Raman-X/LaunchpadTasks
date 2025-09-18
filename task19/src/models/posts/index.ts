import mongoose, { Types } from "mongoose";
const { ObjectId } = Types;

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    createdBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    updatedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postSchema);
