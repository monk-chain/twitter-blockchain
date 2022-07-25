import { User } from './User';

export interface Tweet {
  userWalletAddress: string;
  id: string; // BigInt
  title: string;
  body: string;
  createAt: string;
  image: string;
  like: string;
  user?: User;
}
