import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  searchUsers,
  updateUser,
} from "../controllers/userController";

const router = express.Router();

// POST /api/users
router.post("/", createUser);
router.get("/search", searchUsers);
router.get("/:id", getUserById);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

router.get("/", (req, res) => {
  res.send("Hello World! from api/users");
});

export default router;
