import AppStoreButtons from '@/components/shared/appStoreButtons';
import Image from 'next/image';

export default function BannerPlatform() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
      <div className='relative'>
        <Image
          src='/assets/bannerPlatform.png'
          alt='Hawssa App Platform Banner'
          width={1200}
          height={600}
          className='rounded-lg w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover object-center'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-[#000000]/80 to-[#000000]/30 rounded-lg'></div>

        {/* Content Container - Responsive Layout */}
        <div className='absolute inset-0 flex flex-col lg:flex-row items-center justify-between text-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12'>
          {/* Left side - Text Content */}
          <div className='flex flex-col items-center lg:items-start justify-center text-center lg:text-left mb-6 lg:mb-0 lg:flex-1 lg:pr-8'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-lg leading-tight'>
              The ultimate fitness dance experience – energy, rhythm, and results in one app
            </h1>
            <div className='mt-6 sm:mt-8'>
              <AppStoreButtons />
            </div>
          </div>

          {/* Right side - Mobile Image */}
          <div className=' hidden lg:block flex-shrink-0 w-full sm:w-3/4 lg:w-auto lg:flex-1'>
            <Image
              src='/assets/groupmobile.png'
              alt='Hawssa Mobile App Preview'
              width={400}
              height={600}
              className='rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] object-cover object-center mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
