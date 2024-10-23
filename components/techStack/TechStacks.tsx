import React from 'react'
import { LuMonitorSmartphone } from "react-icons/lu";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import * as motion from 'framer-motion/client'

const techStacks = [
  {title: 'Fullstack development', icon: <LuMonitorSmartphone className='h-full w-full bg-base-900 rounded-lg' />},
  {title: 'AI Development', icon: <GiArtificialIntelligence className='w-full h-full bg-base-900 rounded-lg'/>},
  {title: 'Cybersecurity', icon: <MdSecurity className='h-full w-full bg-base-900 rounded-lg'/>},
]

function TechStacks() {
  return (
    <section className='flex w-full justify-evenly p-2'>
      {techStacks.map((tech, index) => (
          <div className='flex flex-col gap-7 items-center'>
            <motion.div 
              className='p-1 text-green-500 bg-gradient-to-t from-base-600 rounded-xl to-base-800 h-[200px] w-full'
              initial={{
                boxShadow: '0px 0px 0px 0px rgba(0, 255, 0, 0.5)',
              }}
              animate={{
                boxShadow: [
                  '0px 10px 10px 5px rgba(0, 255, 0, 0.1)',
                  '0px 10px 10px 5px rgba(0, 255, 0, 0.3)',
                  '0px 10px 10px 5px rgba(0, 255, 0, 1)',
                  '0px 10px 10px 5px rgba(0, 255, 0, 0.3)',
                  '0px 10px 10px 5px rgba(0, 255, 0, 1)',
                  '0px 10px 10px 5px rgba(0, 255, 0, 0.3)',
                  '0px 10px 10px 5px rgba(0, 255, 0, 1)',
                  '0px 10px 10px 5px rgba(0, 255, 0, 0.3)',
                  '0px 10px 10px 5px rgba(0, 255, 0, 1)',
                  '0px 10px 10px 5px rgba(0, 255, 0, 0.5)',
                ],
                fontColor: ['black', 'white', 'black'],
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.5,
              }}
            >
              {tech.icon}
            </motion.div>
            <p className='text-glow text-green-300 shadow-red-700'>{tech.title}</p>
          </div>
      ))}
    </section>
  )
}

export default TechStacks