import dotenv from "dotenv";
dotenv.config();

const rawPort = process.env.PORT;
const PORT = rawPort && !isNaN(parseInt(rawPort)) ? parseInt(rawPort) : 8080;

const MONGO_URI = process.env.MONGO_URI;

// Runtime check + type assertion
if (!process.env.SECRET_TOKEN) {
  throw new Error("SECRET_TOKEN is required");
}
const SECRET_TOKEN = process.env.SECRET_TOKEN as string;

export { MONGO_URI, PORT, SECRET_TOKEN };
