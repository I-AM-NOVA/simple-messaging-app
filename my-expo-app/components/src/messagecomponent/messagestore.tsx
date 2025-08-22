// src/messagecomponent/messagestore.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Message, sampleMessages } from "./messagedata";

type MessageContextType = {
  messages: Message[];
  addMessage: (msg: Message) => void;
};

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);

  const addMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => {
  const ctx = useContext(MessageContext);
  if (!ctx) throw new Error("useMessages must be used within a MessageProvider");
  return ctx;
};
