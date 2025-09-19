export interface IPost {
  id: number;
  title: string;
  body: string;
  author: string;
  createdBy: string;
  updatedBy?: string;
}

export interface IPostPayload {
  title: string;
  body: string;
  author: string;
  createdBy: string;
  updatedBy?: string;
}
