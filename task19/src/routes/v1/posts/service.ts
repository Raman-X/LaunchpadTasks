import PostRepository from "./repository";
import { IPostPayload } from "./types";

const PostService = {
  getAll() {
    return PostRepository.getAll();
  },

  getById(id: number) {
    try {
      const res = PostRepository.getById(id);
      if (!res) throw new Error("Post not found");
      return res;
    } catch (error) {
      throw error;
    }
  },

  deleteById(id: number) {
    try {
      const res = PostRepository.deleteById(id);
      if (!res) throw new Error("Post not found");
      return res;
    } catch (error) {
      throw error;
    }
  },

  create(payload: IPostPayload) {
    try {
      const { title, body, author, createdBy } = payload;

      if (!title || !body || !author || !createdBy) {
        throw new Error("title, body, author, and createdBy are required.");
      }

      if (
        typeof title !== "string" ||
        typeof body !== "string" ||
        typeof author !== "string" ||
        typeof createdBy !== "string"
      ) {
        throw new Error("All fields must be strings.");
      }

      return PostRepository.create(payload);
    } catch (err) {
      throw err;
    }
  },

  updateById(id: number, payload: Partial<IPostPayload>) {
    try {
      const updatedPost = PostRepository.updateById(id, payload);
      if (!updatedPost) throw new Error("Post not found");
      return updatedPost;
    } catch (err) {
      throw err;
    }
  },
};

export default PostService;
