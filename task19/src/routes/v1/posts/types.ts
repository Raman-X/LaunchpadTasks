export interface IPost {
  _id: string;
  title: string;
  body: string;
  author: string;
  createdBy: string;
  updatedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPostPayload {
  title: string;
  body: string;
  author: string;
  createdBy: string;
  updatedBy?: string;
}
