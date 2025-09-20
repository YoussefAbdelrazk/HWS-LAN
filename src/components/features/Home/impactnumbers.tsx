import SectionTitle from '@/components/shared/sectionTitle';
import Image from 'next/image';

export default function impactnumbers() {
  const impactNumbers = [
    {
      number: '500+',
      title: 'Trainers',
      text: 'Professional  dance experts',
    },
    {
      number: '10,000+',
      title: 'Videos',
      text: 'Step-by-step guided workouts',
    },
    {
      number: '50,000+',
      title: 'Hours',
      text: 'Of training & dance sessions',
    },
    {
      number: '100+',
      title: 'Countries',
      text: 'Global community',
    },
  ];
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-4'>
      {/* left side */}
      <div className=' relative'>
        <Image
          src='/assets/about1.png'
          alt='impactnumbers'
          width={500}
          height={500}
          className=' rounded-lg object-cover '
        />
        <div className='absolute bg-[#F7F225] rounded p-6 -top-5 -left-6 -z-10 hidden sm:block'></div>
        <div className='absolute bg-[#F7F225] rounded p-6 -bottom-5 right-20 -z-10 hidden sm:block'></div>
      </div>
      {/* right side */}
      <div className='flex flex-col items-center justify-center space-y-6'>
        <SectionTitle title='Our' text='Impact in Numbers' />
        <p className='text-lg max-w-md mx-auto relative pl-6 border-l-4 border-[#F7F225]'>
          Discover the strength of our global community through trainers, videos, hours, and
          countries.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {impactNumbers.map((number, index) => (
            <div
              className='flex flex-col items-center justify-center bg-white rounded-lg p-4  shadow-lg'
              key={index}
            >
              <h1 className='text-2xl font-bold'>{number.number}</h1>
              <h3 className='text-lg font-semibold'>{number.title}</h3>
              <p className='text-sm text-gray-600'>{number.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
