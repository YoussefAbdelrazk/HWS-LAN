import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function banner({
  title,
  subtitle,
  buttonText,
  buttonText2,
  image,
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonText2: string;
  image: string;
}) {
  return (
    <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20'>
    <div className='relative'>
      <Image
        src={image}
        alt='Hawssa Dance Fitness Banner'
        width={1200}
        height={600}
        className='rounded-lg w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover'
      />
      <div className='absolute inset-0 bg-gradient-to-r from-[#000000]/80 to-[#000000]/30 rounded-lg '>
        <div className='text-white flex flex-col items-center justify-center text-center max-w-6xl mx-auto h-full gap-3 sm:gap-3.5 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-xl md:text-2xl  font-bold italic font-poppins leading-tight'>
            {title}
          </h1>
          <p className='text-sm sm:text-base lg:text-lg max-w-4xl leading-relaxed'>
            {subtitle}
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 items-center w-full max-w-2xl'>
            <Button className='bg-[#F7F225] hover:bg-[#E8CE23] text-black px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-md font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-[#000000] w-full sm:w-auto'>
              {buttonText}
            </Button>
            <Button className='border-2 border-white text-white hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-md font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto'>
              {buttonText2}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
