import SectionTitle from '@/components/shared/sectionTitle'
import Image from 'next/image'
import React from 'react'

export default function OurVision() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='flex flex-col gap-4'>
        <SectionTitle title='Our' text='Vision' />
        <h3 className='text-2xl font-semibold'>To inspire people worldwide to move, connect, and transform through dance fitness</h3>
        <p className='text-lg text-[#323232CC]'><span className='font-bold text-[#F7F225]/90'>HAWSSA® </span>is a fun, fitness dance to keep fit. It is designed for all people from different ages who are looking for a happy fit hour. As long as we can conquer your heart and make you move your feet, you are ready to become part of HAWSSA® family.
        </p>
      </div>

      <div className='relative'>
        <Image src='/assets/event2.png' alt='Our Vision' width={500} height={500} className='rounded-lg w-full h-[300px] object-cover' />
      </div>

    </div>
  )
}
