import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GiArtificialIntelligence } from 'react-icons/gi'
import AiChatMessages from './AiChatMessages'
import { useAiChatContext } from '@/context/aiChatContext/AiChatContext'
import AiMessageInput from './AiMessageInput'

type Props = {
  handleChatClose: () => void
}

function AiChatWindow({ handleChatClose }: Props) {
  const [userNameController, setUserNameController] = useState<string>('')
  const { userName, setUserName } = useAiChatContext()

  return (
    <motion.section
      initial={{ width: 0 }}
      animate={{
        width: '350px',
        transition: {
          duration: 0.5,
          type: 'spring',
          stiffness: 120
        }
      }}
      exit={{ width: 0 }}
      
      className='p-1 overflow-hidden pb-0 rounded-lg h-[500px] rounded-b-none flex flex-col bg-gradient-to-tr from-base-800 to-base-600 absolute right-0 bottom-0 w-[350px]'>
        <div className='flex h-full bg-base-900 rounded-lg flex-col sticky top-0 rounded-b-none'>
          <div className='flex w-full justify-between bg-base-800 p-4'>
            <GiArtificialIntelligence className="text-green-400 h-[45px] w-[45px]" />
            <button 
              className='hover:scale-110 duration-100 font-bold text-3xl text-green-600 text-glow shadow-green-800' 
              onClick={handleChatClose}>
                _
            </button>
          </div>
          {userName 
            ? <>
                <AiChatMessages />
                <AiMessageInput />
              </>
            : <div className='flex flex-col items-center justify-center h-full'>
                <input 
                  type="text" 
                  value={userNameController} 
                  onChange={(e) => setUserNameController(e.target.value)} 
                />
                <button onClick={() => setUserName(userNameController)}>setusername</button>
              </div>}
        </div>
    </motion.section>
  )
}

export default AiChatWindow