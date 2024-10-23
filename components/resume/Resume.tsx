'use client'
import Image from 'next/image'
import React from 'react'
import { resumeText } from './resumeText'
import useTextRoulette from '@/hooks/textRoulette/useTextRoulette'
import { motion } from 'framer-motion'

function Resume() {
  const { mixedText } = useTextRoulette(resumeText)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='w-full h-fit flex flex-col sm:flex-row justify-center gap-5 items-center'
    >
      <Image className='p-10' height={200} width={200} alt='author' src={'/me.png'}/>
      <p className='max-w-[400px] text-center text-green-300 text-glow shadow-green-900'>
        {mixedText}
      </p>
    </motion.section>
  )
}

export default Resume