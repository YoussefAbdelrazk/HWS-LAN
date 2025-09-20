export default function abouthero() {
  return (
    <section
      className='bg-cover bg-center bg-no-repeat min-h-screen w-full relative'
      style={{ backgroundImage: 'url(/assets/Hero.png)' }}
    >
      {/* overlay */}
      <div className='absolute inset-0 bg-linear-to-r from-blue-600/40 to-black/50'></div>

      {/* content */}
      <div className='relative z-10 md:top-50   flex  items-center w-full h-full justify-center px-4 md:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-32'>
        <div className='text-white text-center max-w-7xl flex flex-col items-center justify-center gap-6 md:gap-8'>
          {/* Main heading */}
          <h1 className='text-3xl md:text-5xl font-bold italic font-poppins tracking-wide leading-tight'>
            Hawssa{' '}
            <span className='text-[#F7F225] bg-gradient-to-r from-[#F7F225] to-[#E8CE23] bg-clip-text text-transparent'>
              {' '}
              Dance
            </span>{' '}
            Fitness <br /> Where Energy{' '}
            <span className='text-[#F7F225] bg-gradient-to-r from-[#F7F225] to-[#E8CE23] bg-clip-text text-transparent'>
              Meets Passion
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
