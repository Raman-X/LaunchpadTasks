import Post from "../../../models/posts";
import { IPost, IPostPayload } from "./types";

function convertPostIdsToStrings(post: any): IPost {
  if (!post) return post;

  return {
    ...post,
    _id: post._id.toString(),
    author: post.author.toString(),
    createdBy: post.createdBy.toString(),
    updatedBy: post.updatedBy ? post.updatedBy.toString() : undefined,
  };
}

const PostRepository = {
  async create(payload: IPostPayload): Promise<IPost> {
    const post = await Post.create(payload);
    return convertPostIdsToStrings(post.toObject());
  },

  async getAll(): Promise<IPost[]> {
    const posts = await Post.find().lean();
    return posts.map(convertPostIdsToStrings);
  },

  async getById(id: string): Promise<IPost | null> {
    const post = await Post.findById(id).lean();
    return post ? convertPostIdsToStrings(post) : null;
  },

  async deleteById(id: string): Promise<boolean> {
    const result = await Post.findByIdAndDelete(id);
    return !!result;
  },

  async updateById(
    id: string,
    payload: Partial<IPostPayload>
  ): Promise<IPost | null> {
    const updated = await Post.findByIdAndUpdate(id, payload, {
      new: true,
    }).lean();

    return updated ? convertPostIdsToStrings(updated) : null;
  },
};

export default PostRepository;
