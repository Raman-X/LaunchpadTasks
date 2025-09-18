import dotenv from "dotenv";
dotenv.config();

const rawPort = process.env.PORT;
const PORT = rawPort && !isNaN(parseInt(rawPort)) ? parseInt(rawPort) : 8080;

const MONGO_URI = process.env.MONGO_URI;

export { MONGO_URI, PORT };
