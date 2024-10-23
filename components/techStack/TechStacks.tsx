import React from 'react'

type Props = {
  techStack: string[]
}

function TechStacks({ techStack }: Props) {
  return (
    <ul className='flex w-full flex-col gap-3'>
      {techStack.map((tech, index) => (
        <li key={index} className='text-green-300 text-glow shadow-green-900'>{`- ${tech}`}</li>
      ))}
    </ul>
  )
}

export default TechStacks