'use client'
import React, { useState } from 'react'
import ChatBubble from './ChatBubble'
import AiChatWindow from './AiChatWindow'
import { AnimatePresence } from 'framer-motion'

function AiChat() {
  const [chatOpen, setChatOpen] = useState(false)

  const handleChatState = () => {
    setChatOpen(prev => !prev)
  }

  return (
    <div className='flex max-h-[500px] w-full justify-end sticky bottom-0'>
      {!chatOpen && (
        <ChatBubble handleChatOpen={handleChatState}/>
      )}
      <AnimatePresence>
        {chatOpen &&
          <AiChatWindow 
            handleChatClose={handleChatState}
          />
        }
      </AnimatePresence>
    </div>
  )
}

export default AiChat