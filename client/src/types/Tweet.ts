import { User } from './User';

export interface Tweet {
  title: string;
  body: string;
  createAt: string;
  image: string;
  likeCount: string;
  user?: User;
}
