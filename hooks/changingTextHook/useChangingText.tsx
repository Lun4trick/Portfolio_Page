import { useCallback, useEffect, useMemo, useReducer, useState } from "react";

interface ReducerState {
  upcomingText: string;
  upcomingTextIndex: number;
}

type Action =
  | { type: "SET_UPCOMING_TEXT"; payload: string }
  | { type: "INCREMENT_INDEX" }
  | { type: "RESET_INDEX" };

const initialState = (texts: string[]): ReducerState => ({
  upcomingText: texts[0],
  upcomingTextIndex: 0,
});

const reducer = (state: ReducerState, action: Action): ReducerState => {
  switch (action.type) {
    case "SET_UPCOMING_TEXT":
      return { ...state, upcomingText: action.payload };
    case "INCREMENT_INDEX":
      return { ...state, upcomingTextIndex: state.upcomingTextIndex + 1 };
    case "RESET_INDEX":
      return { ...state, upcomingTextIndex: 0 };
    default:
      return state;
  }
};

type ChangeTextFunctionType = (newTexts: string) => void;

/**
 * Custom hook to create a typing effect for a list of texts.
 * @param {string[]} texts - List of texts to be displayed with typing effect.
 * @param {number} typingDelay - Delay in milliseconds between each character typing.
 * @param {number} textDelay - Delay in milliseconds between each text change.
 * @returns {[string, ChangeTextFunctionType]} - The current text being displayed with typing effect.
 */
function useChangingText(
  texts: string[],
  typingDelay: number,
  textDelay: number
): {displayText: string, changeText: ChangeTextFunctionType}{
  const [upcomingTextState, upcomingTextDispatch] = useReducer(
    reducer,
    texts,
    initialState
  );
  const { upcomingText, upcomingTextIndex } = upcomingTextState;
  const [displayText, setDisplayText] = useState<string>("");
  const [pushMessage, setPushMessage] = useState<string>("");
  const [isTextChanging, setIsTextChanging] = useState<boolean>(false);
  const longestTextsLength = useMemo(() => Math.max(...texts.map((text) => text.length)), [texts]);
  const delayBetweenTexts = useMemo(() => longestTextsLength * typingDelay + textDelay, [longestTextsLength, typingDelay, textDelay]);

  const deleteCharacters = useCallback(
    (currentText: string) => {
      const currentSplitedText = currentText.split("");

      const deletePromise = new Promise<void>((resolve) => {
        if (currentText !== upcomingText) {
          currentSplitedText.forEach((_char, index) => {
            setTimeout(() => {
              setDisplayText((prev) => prev.slice(0, -1));
            }, index * typingDelay);
          });

          setTimeout(() => {
            resolve();
          }, currentSplitedText.length * typingDelay);
        }
      });

      return deletePromise;
    },
    [typingDelay, upcomingText]
  );

  const changeText = useCallback(
    (newText: string) => {
      setPushMessage(newText);
    },
    []
  );

  useEffect(() => {
    if (texts.length < 2 && upcomingTextIndex !== 0) return

    const interval = setInterval(() => {
      const isPushMessage = pushMessage !== ""
      if (upcomingTextIndex < texts.length - 1) {
        upcomingTextDispatch({ type: 'INCREMENT_INDEX' })
        upcomingTextDispatch({ type: 'SET_UPCOMING_TEXT', payload: isPushMessage ? pushMessage : texts[upcomingTextIndex + 1] })
      } else {
        upcomingTextDispatch({ type: 'RESET_INDEX' })
        upcomingTextDispatch({ type: 'SET_UPCOMING_TEXT', payload: isPushMessage ? pushMessage : texts[0] })
      }

      setPushMessage("")
    }, delayBetweenTexts)

    const clear = () => {
      clearInterval(interval)
    }

    return () => clear()
  }, [texts, textDelay, upcomingTextIndex, pushMessage, delayBetweenTexts])

  useEffect(() => {
    if (!isTextChanging) {
      setIsTextChanging(true)
      deleteCharacters(displayText).then(() => {
        upcomingText.split("").forEach((char, index) => {
          setTimeout(() => {
            setDisplayText((prev) => prev + char);
          }, index * typingDelay);
        })
      }).finally(() => {
        setIsTextChanging(false)
      });
    }
  }, [upcomingText])

  return {displayText, changeText};
}

export default useChangingText;
