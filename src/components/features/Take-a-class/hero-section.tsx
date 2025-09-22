import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className='relative h-screen min-h-[600px] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/assets/takeclass.png'
          alt='Fitness Training Background'
          fill
          className='object-cover opacity-20'
        />
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-indigo-900/80'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 h-full flex items-center justify-center'>
        <div className='text-center text-white'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
            Book Your Perfect <span className='text-[#F7F225]'>Fitness Trainer</span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed'>
            Connect with certified trainers, book classes, and transform your fitness journey with
            personalized coaching
          </p>
        </div>
      </div>
    </div>
  );
}
