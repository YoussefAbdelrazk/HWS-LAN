import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
      <div className='relative'>
        <Image
          src='/assets/banner.png'
          alt='Hawssa Dance Fitness Banner'
          width={1200}
          height={600}
          className='rounded-lg w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-[#000000]/80 to-[#000000]/30 rounded-lg'>
          <div className='text-white flex flex-col items-center justify-center text-center max-w-6xl mx-auto h-full gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic font-poppins leading-tight'>
              Move Your Body Join a <span className='text-[#F7F225]'>Hawssa Class Today</span>
            </h1>
            <p className='text-sm sm:text-base lg:text-lg max-w-4xl leading-relaxed'>
              Find the perfect Hawssa class for your fitness level and schedule. From
              beginner-friendly sessions to high-intensity workouts, there&apos;s something for
              everyone
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 items-center w-full max-w-2xl'>
              <Button className='bg-[#F7F225] hover:bg-[#E8CE23] text-black px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-md font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-[#000000] w-full sm:w-auto'>
                Find a Class Near You
              </Button>
              <Button className='border-2 border-white text-white hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-md font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto'>
                Book Online Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
