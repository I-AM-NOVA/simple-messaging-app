//use for local storage

export type Message = {
  id: string;
  sender: string;
  text: string;
  timestamp: string; // ISO string
};

export const sampleMessages: Message[] = [
  {
    id: "1",
    sender: "Alice",
    text: "Hello there!",
    timestamp: new Date().toISOString(),
  },
  {
    id: "2",
    sender: "Bob",
    text: "Hey Alice, how are you?",
    timestamp: new Date().toISOString(),
  },
];
