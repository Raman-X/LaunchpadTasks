import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  age?: number;
  country?: string;
  last_login?: Date;
  followers?: mongoose.Types.ObjectId[]; // array of User IDs
  interests?: string[];
  profile?: string;
  theme?: string;
  bio?: string;
  devices?: string[];
  type?: string;
  os?: string;
  last_seen?: Date;
  subscription?: boolean;
  tier?: string;
  start_date?: Date;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: Number,
    country: String,
    last_login: Date,
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    interests: [String],
    profile: String,
    theme: String,
    bio: String,
    devices: [String],
    type: String,
    os: String,
    last_seen: Date,
    subscription: Boolean,
    tier: String,
    start_date: Date,
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
