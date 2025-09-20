import Image from 'next/image';

export default function haswabanner() {
  
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div>
        <Image src='/assets/Haswaabanner.png' alt='haswabanner' width={500} height={500} className='w-full h-[300px] object-cover rounded-lg' />
      </div>
    </div>
  );
}
