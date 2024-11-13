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
    'But you can call me Levi',
    'Or you can call me -> +36 70 429 8682',
  ], 100, 1000)

  return (
    <HeaderTextContext.Provider value={{ displayedText: displayText, changeText }}>
      {children}
    </HeaderTextContext.Provider>
  );
};