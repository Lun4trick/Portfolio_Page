'use client'
import { ReactNode, useEffect, useRef, useState } from "react";
import { AiChatContext, Message } from "./AiChatContext";
import { io, Socket } from "socket.io-client";

interface AiChatProviderProps {
  children: ReactNode;
}

export const AiChatProvider: React.FC<AiChatProviderProps> = ({ children }) => {
  const socket = useRef<Socket | null>(null);
  const [userName, setUserName] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    if (!socket.current && userName) {
      socket.current = io(`https://ai-chat-service-53e99df321b6.herokuapp.com?userName=${userName}`)
      socket.current.emit('watch-messages')
      socket.current.on('new-message', (msg: Message) => {
        if (msg.role !== 'system') {
          setMessages(prev => [...prev, msg])
        }
          })
    }
  }, [userName])


  return (
    <AiChatContext.Provider value={{ socket, userName, setUserName, messages }}>
      {children}
    </AiChatContext.Provider>
  );
};