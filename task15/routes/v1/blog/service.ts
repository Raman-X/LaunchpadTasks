import PostRepository from "./repository";
import { IPostPayload } from "./types";

const PostService = {
  getAll() {
    return PostRepository.getAll();
  },

  getById(id: number) {
    const post = PostRepository.getById(id);
    if (!post) throw new Error("Post not found");
    return post;
  },

  create(payload: IPostPayload) {
    if (!payload.title || !payload.content)
      throw new Error("title and content are required");
    return PostRepository.create(payload);
  },

  updateById(id: number, payload: Partial<IPostPayload>) {
    const updatedPost = PostRepository.updateById(id, payload);
    if (!updatedPost) throw new Error("Post not found");
    return updatedPost;
  },

  deleteById(id: number) {
    const deleted = PostRepository.deleteById(id);
    if (!deleted) throw new Error("Post not found");
    return true;
  },

  getByAuthor(authorId: number) {
    return PostRepository.getByAuthor(authorId);
  },
};

export default PostService;
