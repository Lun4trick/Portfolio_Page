'use client'

import React from 'react'
import ChangingNameLogo from './ChangeingNameLogo'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <>
      <nav className='flex p-5 h-[200px] bg-base-900 items-center w-full'>
        <ChangingNameLogo />
      </nav>
      <motion.div 
        initial={{ width: 0 }} 
        animate={{ width: '100%' }}
        transition={{ duration: 1 }}
        className='w-[100vw] h-[1px] bg-red-700 shadow-xl shadow-red-700'/>
    </>
  )
}

export default Navbar