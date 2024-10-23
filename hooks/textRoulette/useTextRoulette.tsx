import React, { useEffect } from 'react'

function useTextRoulette(textToDisplay: string) {
  const [mixedText, setMixedText] = React.useState('')

  const getRandomBinary = () => {
    const binary = '01'
    return binary[Math.floor(Math.random() * binary.length)]
  }

  const mixText = (text: string) => {
    const randomText = text.split('').map(char => {
      if (/[a-zA-Z]/.test(char)) {
        return getRandomBinary()
      }
      return char
    }).join('')
    setMixedText(randomText)
  }

  useEffect(() => {
    const iterations = 50
    const timeout = 75
    for (let i = 0; i < iterations; i++) {
      if (i < iterations - 1) {
        setTimeout(() => {
          mixText(textToDisplay)
        }, i * timeout)
      } else {
        setTimeout(() => {
          setMixedText(textToDisplay)
        }, iterations * timeout)
      }
    }
  }, [textToDisplay])

  return { mixedText }
}

export default useTextRoulette