'use client'
import React from 'react'
import { FaRegMessage } from "react-icons/fa6";

type Props = {
  handleChatOpen: () => void
}

function ChatBubble( { handleChatOpen }: Props) {
  return (
      <button
        onClick={handleChatOpen}
        className='p-4 h-[70px] md:h-[100px] box flex justify-center mr-20 self-end items-center absolute bottom-20 rounded-full bg-green-600'>
        <FaRegMessage className='h-full w-full'/>
      </button>
  )
}

export default ChatBubble