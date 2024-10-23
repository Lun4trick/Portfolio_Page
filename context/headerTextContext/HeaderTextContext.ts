'use client'
import { createContext, useContext } from 'react';

interface TextContextType {
  displayedText: string;
  changeText: (newText: string) => void;
}

export const HeaderTextContext = createContext<TextContextType | undefined>(undefined);

export const useHeaderTextContext = () => {
  const context = useContext(HeaderTextContext);
  if (!context) {
    throw new Error('useTextContext must be used within a TextProvider');
  }
  return context;
}