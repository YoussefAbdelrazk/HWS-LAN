import SectionTitle from '@/components/shared/sectionTitle';
import Image from 'next/image';
import { CornerDownRight } from 'lucide-react';

export default function hawsaTot() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='flex flex-col gap-4'>
        <SectionTitle title='What is' text='Hawssa Tot' />
        <h3 className='text-2xl font-semibold text-[#1C1C1C]'>
          Hawssa Train of Trainers (TOT) Program
        </h3>
        <p className='text-lg max-w-lg text-[#323232CC]'>
          Our TOT program is designed for passionate fitness and dance professionals who want to
          expand their impact. By joining, you’ll gain exclusive access to Hawssa’s rich archive of
          training materials and reach over 1 million users who already trust Hawssa to guide their
          fitness journey.
        </p>

        <ul className=' flex flex-col gap-2 text-md text-[#323232CC]'>
          <li className='flex items-center gap-2'>
          <CornerDownRight className='text-[#F7F225]' />
          Access to Hawssa’s exclusive trainer archive</li>
          <li className='flex items-center gap-2'>
          <CornerDownRight className='text-[#F7F225]' />
          Visibility to 1M+ trusted clients
          </li>
          <li className='flex items-center gap-2'>
          <CornerDownRight className='text-[#F7F225]' />
          Grow your influence and income
          </li>

        </ul>
      </div>
      {/* images */}
      <div className='relative'>
        <Image
          src='/assets/hawsatot.jpg'
          alt='Hawssa Tot'
          width={500}
          height={500}
          className='rounded-lg w-full h-[300px] object-cover'
        />
      </div>
    </div>
  );
}
