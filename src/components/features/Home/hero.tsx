import Image from 'next/image';

export default function hero() {
  return (
    <div
      className='bg-cover bg-center bg-no-repeat h-[100vh] min-h-[600px] w-full relative'
      style={{ backgroundImage: 'url(/assets/Hero.png)' }}
    >
      {/* overlay */}
      <div className='absolute inset-0 bg-black/40 md:bg-black/50'></div>

      {/* content */}
      <div className='relative z-10 h-full flex items-center justify-center px-4 md:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-32'>
        <div className='text-white text-center max-w-7xl flex flex-col items-center justify-center gap-6 md:gap-8'>
          {/* Main heading */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold italic font-poppins tracking-wide leading-tight'>
            Move Your Body with{' '}
            <span className='text-[#F7F225] bg-gradient-to-r from-[#F7F225] to-[#E8CE23] bg-clip-text text-transparent'>
              Hawssa
            </span>
            <br />
            <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
              The Global Dance Fitness Experience
            </span>
          </h1>

          {/* Description */}
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl leading-relaxed px-4'>
            Join millions worldwide in the most energetic dance fitness program. Get certified, find
            classes, and transform your fitness journey with rhythm and movement.
          </p>



          {/* Certification badge */}
          <div className='bg-black/60 backdrop-blur-lg rounded-2xl px-6 py-4 md:px-8 md:py-6 mt-8 md:mt-12 border border-white/20'>
            <div className='flex flex-col sm:flex-row items-center gap-4 md:gap-6'>
              <Image
                src='/assets/medal-star.svg'
                alt='certification'
                width={50}
                height={50}
                className='w-10 h-10 md:w-12 md:h-12'
              />
              <p className='text-sm md:text-base lg:text-lg text-gray-200 text-center sm:text-left'>
                Officially Certified by the International Dance Council (CID-UNESCO)
              </p>
            </div>
          </div>


        </div>
      </div>

     
    </div>
  );
}
