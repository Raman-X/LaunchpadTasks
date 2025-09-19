import PostRepository from "./repository";
import { IPostPayload } from "./types";

const PostService = {
  async getAll() {
    return await PostRepository.getAll();
  },

  async getById(id: string) {
    if (!id) throw new Error("Invalid ID");
    const post = await PostRepository.getById(id);
    if (!post) throw new Error("Post not found");
    return post;
  },

  async deleteById(id: string) {
    if (!id) throw new Error("Invalid ID");
    const deleted = await PostRepository.deleteById(id);
    if (!deleted) throw new Error("Post not found");
    return deleted;
  },

  async create(payload: IPostPayload) {
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

    return await PostRepository.create(payload);
  },

  async updateById(id: string, payload: Partial<IPostPayload>) {
    if (!id) throw new Error("Invalid ID");
    const updatedPost = await PostRepository.updateById(id, payload);
    if (!updatedPost) throw new Error("Post not found");
    return updatedPost;
  },
};

export default PostService;
