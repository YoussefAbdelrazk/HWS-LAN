
import React from 'react'

export default function HeroShared({title,image}: {title: string,image: string}) {
  return (
    <div className='bg-cover bg-center bg-no-repeat h-[100vh] min-h-[600px] w-full relative'
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* overlay */}
      <div className='absolute inset-0 bg-black/40 md:bg-black/50'></div>

      {/* content */}
      <div className='relative z-10 h-full flex items-center justify-center px-4 md:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-32'>
        <div className='text-white text-center max-w-7xl flex flex-col items-center justify-center gap-6 md:gap-8'>
          {/* Main heading */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold italic font-poppins tracking-wide leading-tight'>
            {title}
          </h1>
        </div>
      </div>

    </div>
  )
}
