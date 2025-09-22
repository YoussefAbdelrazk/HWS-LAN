import SectionTitle from '@/components/shared/sectionTitle'
import Image from 'next/image';

export default function Team() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='text-center space-y-4 mb-12'>
        <SectionTitle title='' text='Our Team… Behind Every Move' />
        <p className='max-w-xl mx-auto text-[#323232CC]'>
          Our expert trainers bring passion and energy to every step, delivering an unparalleled
          dance fitness experience
        </p>
      </div>
      <div>
        <Image
          src='/assets/Header.svg'
          alt='Team'
          width={500}
          height={500}
          className='rounded-lg w-full h-[320px] object-cover object-center'
        />
      </div>
    </div>
  );
}
