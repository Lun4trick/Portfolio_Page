'use client'
import { createContext, useContext } from 'react';
import { Socket } from 'socket.io-client';

export type Message = {
  role: 'user' | 'assistant' | 'system',
  content: string
}

interface AiChatContextType {
  socket: React.RefObject<Socket | null>;
  userName: string | null;
  setUserName: (userName: string) => void;
  messages: Message[];
}

export const AiChatContext = createContext<AiChatContextType | undefined>(undefined);

export const useAiChatContext = () => {
  const context = useContext(AiChatContext);
  if (!context) {
    throw new Error('useAiContext must be used within a AiChatProvider');
  }
  return context;
}