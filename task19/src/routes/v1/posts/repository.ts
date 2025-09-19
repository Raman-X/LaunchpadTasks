import { IPost, IPostPayload } from "./types";

let POSTS: Array<IPost> = [];

const PostRepository = {
  getNextId(): number {
    return POSTS.length + 1;
  },

  create(payload: IPostPayload): IPost {
    const data: IPost = {
      ...payload,
      id: this.getNextId(),
    };
    POSTS.push(data);
    return data;
  },

  getAll(): IPost[] {
    return POSTS;
  },

  getById(id: number): IPost | undefined {
    return POSTS.find((post) => post.id === id);
  },

  deleteById(id: number): boolean | undefined {
    const post = this.getById(id);
    if (!post) return undefined;
    POSTS = POSTS.filter((post) => post.id !== id);
    return true;
  },

  updateById(id: number, payload: Partial<IPostPayload>): IPost | undefined {
    const post = this.getById(id);
    if (!post) return undefined;
    const newPost: IPost = {
      ...post,
      ...payload,
    };
    POSTS = POSTS.map((p) => (p.id === id ? newPost : p));
    return newPost;
  },
};

export default PostRepository;
