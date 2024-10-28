import React, { useEffect, useRef } from 'react'
import cn from 'classnames'
import { useAiChatContext } from '@/context/aiChatContext/AiChatContext'
import { motion } from 'framer-motion'

function AiChatMessages() {
  const { messages } = useAiChatContext()
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.5,
        }
      }}
      className='flex p-3 flex-grow mt-auto flex-col gap-3 h-full overflow-y-scroll'
      style={{
        scrollbarWidth: 'none',
      }}
    >
      {messages.map((msg, index) => (
        <div 
          key={index} 
          className={
            cn(
              'p-3 rounded-xl max-w-[90%] break-words',
              msg.role === 'user' 
                ? 'bg-green-600 self-start rounded-bl-none' 
                : 'bg-red-600 self-end rounded-br-none'
            )
          }>
          {msg.content}
          <div ref={messagesEndRef} />
        </div>
      ))}
    </motion.div>
  )
}

export default AiChatMessages