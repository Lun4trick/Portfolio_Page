'use client'

import React from 'react'
import ChangingNameLogo from './ChangeingNameLogo'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <div className='flex flex-col min-h-[200px] bg-base-900 w-full sticky top-0 z-10'>
      <nav className='flex min-h-full items-center w-full flex-grow'>
        <ChangingNameLogo />
      </nav>
      <motion.div 
        initial={{ width: 0 }} 
        animate={{ width: '100%' }}
        transition={{ duration: 1 }}
        className='w-full h-[1px] bg-red-950'/>
    </div>
  )
}

export default Navbar