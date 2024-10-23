'use client'
import { ReactNode } from "react";
import { HeaderTextContext } from "./HeaderTextContext";
import useChangingText from "@/hooks/changingTextHook/useChangingText";

interface TextProviderProps {
  children: ReactNode;
}

export const HeaderTextProvider: React.FC<TextProviderProps> = ({ children }) => {
  const { displayText, changeText} = useChangingText([
    'Levente Krotos',
    'Frontend Developer',
    'React Developer',
  ], 100, 1000)

  return (
    <HeaderTextContext.Provider value={{ displayedText: displayText, changeText }}>
      {children}
    </HeaderTextContext.Provider>
  );
};