export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string; // hashed
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPostPayload {
  title: string;
  content: string;
  authorId: number;
}
