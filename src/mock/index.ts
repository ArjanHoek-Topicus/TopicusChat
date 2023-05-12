import { IMessage } from 'src/models/messageInterface';
import { uniqueNamesGenerator, names } from 'unique-names-generator';

export const createNames = (amount: number): string[] => {
  const output: string[] = [];

  for (let i = 0; i < amount; i++) {
    output.push(createName());
  }

  return output;
};

export const createName = (): string => {
  return uniqueNamesGenerator({
    dictionaries: [names],
    style: 'lowerCase',
    separator: ' ',
  });
};

export const createMessages = (clients: string[]): IMessage[] => {
  return [
    {
      clientName: clients[0],
      text: 'Hi there!',
      timestamp: new Date(),
    },
    {
      clientName: clients[1],
      text: 'Hi! How are you?',
      timestamp: new Date(),
    },
    {
      clientName: clients[2],
      text: "Hey, you're still alive?",
      timestamp: new Date(),
    },
    {
      clientName: clients[0],
      text: "I'm doing very well, thank you! And yes, still going strong.",
      timestamp: new Date(),
    },
    {
      clientName: clients[1],
      text: "Oh, you're not going to ask me how we're doing? After all the work you left us with? Shame on you! I've had nightmares ever since you left...",
      timestamp: new Date(),
    },
    {
      clientName: clients[2],
      text: "Yeah, that's kind of rude...",
      timestamp: new Date(),
    },
  ];
};
