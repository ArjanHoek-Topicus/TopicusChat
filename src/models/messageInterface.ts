import { IUser } from './userInterface';

export interface IMessage {
  user: IUser;
  text: string;
  timestamp: Date;
}
