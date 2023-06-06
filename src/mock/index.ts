import { IMessage } from 'src/models/messageInterface';
import { IUser } from 'src/models/userInterface';
import { uniqueNamesGenerator, names } from 'unique-names-generator';

export const createUsers = (amount: number): IUser[] => {
  const output: IUser[] = [];

  for (let i = 0; i < amount; i++) {
    output.push(createUser());
  }

  return output;
};

export const createUser = (): IUser => {
  return {
    name: uniqueNamesGenerator({
      dictionaries: [names],
      style: 'lowerCase',
      separator: ' ',
    }),
    active: true,
  };
};

export const createMessages = (clients: IUser[]): IMessage[] => {
  return [
    {
      user: clients[0],
      text: 'Hi there!',
      timestamp: new Date(),
    },
    {
      user: clients[1],
      text: 'Hi! How are you?',
      timestamp: new Date(),
    },
  ];
};
