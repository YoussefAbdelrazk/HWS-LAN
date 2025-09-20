
import React from 'react'

export default function SectionTitle({title,text}: {title: string,text: string}) {
  return (
    <div>
      <h2 className='text-3xl md:text-4xl  font-semibold font-poppins'>
        <span className='text-[#F7F225]'>&gt;&gt;</span>{' '}
        <span className='text-black'>{title}</span>{' '}
        <span className='relative text-black after:content-["_"] after:block after:w-full after:h-4
        3 after:bg-[#F7F225] after:absolute after:bottom-4 after:left-0 after:-z-10'>
          {text}

        </span>
      </h2>

    </div>
  )
}
