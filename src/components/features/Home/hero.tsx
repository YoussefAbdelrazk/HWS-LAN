import { Animate, TextReveal } from '@/lib/animations';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');
  return (
    <section
      className='bg-cover bg-center bg-no-repeat h-[100vh] min-h-[600px] w-full relative'
      style={{ backgroundImage: 'url(/assets/Hero.png)' }}
    >
      {/* overlay */}
      <div className='absolute inset-0 bg-black/40 md:bg-black/50'></div>

      {/* content */}
      <div className='relative z-10 h-full flex items-center justify-center px-4 md:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-32'>
        <div className='text-white text-center max-w-7xl flex flex-col items-center justify-center gap-6 md:gap-8'>
          {/* Main heading */}
          <TextReveal delay={0.2}>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold italic font-poppins tracking-wide leading-tight'>
              {t('title')}{' '}
              <span className='bg-gradient-to-r from-[#F7F225] to-[#E8CE23] bg-clip-text text-transparent'>
                {t('brandName')}
              </span>
              <br />
              <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
                {t('subtitle')}
              </span>
            </h1>
          </TextReveal>

          {/* Description */}
          <Animate variant='fadeInUp' delay={0.4}>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl leading-relaxed px-4'>
              {t('description')}
            </p>
          </Animate>

          {/* Certification badge */}
          <Animate variant='scaleIn' delay={0.6}>
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
                  {t('certification')}
                </p>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
