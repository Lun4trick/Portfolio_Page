'use client'
import Image from 'next/image'
import React from 'react'
import { resumeText } from './resumeText'
import useTextRoulette from '@/hooks/textRoulette/useTextRoulette'

function Resume() {
  const { mixedText } = useTextRoulette(resumeText)

  return (
    <section className='w-full h-fit flex flex-col sm:flex-row justify-center gap-5 items-center'>
      <Image className='max-h-[400px]' height={400} width={300} alt='author' src={'/me.png'}/>
      <p className='max-w-[400px] text-center text-green-300 text-glow shadow-green-900'>
        {mixedText}
      </p>
    </section>
  )
}

export default Resume