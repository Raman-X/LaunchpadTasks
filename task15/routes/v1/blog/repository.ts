import { IPost, IPostPayload } from "./types";

let POSTS: IPost[] = [];

const PostRepository = {
  getNextId(): number {
    return POSTS.length + 1;
  },

  create(payload: IPostPayload): IPost {
    const newPost: IPost = {
      ...payload,
      id: this.getNextId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    POSTS.push(newPost);
    return newPost;
  },

  getAll(): IPost[] {
    return POSTS;
  },

  getById(id: number): IPost | undefined {
    return POSTS.find((post) => post.id === id);
  },

  updateById(id: number, payload: Partial<IPostPayload>): IPost | undefined {
    const post = this.getById(id);
    if (!post) return undefined;

    const updatedPost: IPost = {
      ...post,
      ...payload,
      updatedAt: new Date(),
    };
    POSTS = POSTS.map((p) => (p.id === id ? updatedPost : p));
    return updatedPost;
  },

  deleteById(id: number): boolean {
    const exists = this.getById(id);
    if (!exists) return false;
    POSTS = POSTS.filter((p) => p.id !== id);
    return true;
  },

  getByAuthor(authorId: number): IPost[] {
    return POSTS.filter((p) => p.authorId === authorId);
  },
};

export default PostRepository;
