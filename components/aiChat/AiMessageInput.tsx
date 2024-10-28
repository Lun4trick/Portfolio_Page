import { useAiChatContext } from '@/context/aiChatContext/AiChatContext'
import React from 'react'
import cn from 'classnames'

function AiMessageInput() {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const [message, setMessage] = React.useState<string>('')
  const { socket, messages } = useAiChatContext()
  const isLastMessageFromUser = messages[messages.length - 1]?.role === 'user'

  const sendMessage = (msg: string) => {
    if (socket.current && msg) {
      socket.current.emit('send-message', {
        role: 'user',
        content: msg
      })
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(message)
      setMessage('')
    }
  }



  return (
    <form action="POST" className='flex p-5 bg-inherit sticky bottom-0 z-10 w-full gap-2 items-center'>
      <textarea
        disabled={isLastMessageFromUser}
        ref={textareaRef}
        onKeyDown={handleKeyPress}
        className={cn(
          'p-2 flex rounded-xl w-full resize-none',
          { 'cursor-not-allowed': isLastMessageFromUser },
        )}
        style={{
          scrollbarWidth: 'none'
        }}
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
      />
      <button
        disabled={isLastMessageFromUser}
        onClick={(e) => {
          e.preventDefault()
          sendMessage(message)
          setMessage('')
        }}
        className='p-3 bg-green-500 rounded-full'>
        Send
      </button>
    </form>
  )
}

export default AiMessageInput