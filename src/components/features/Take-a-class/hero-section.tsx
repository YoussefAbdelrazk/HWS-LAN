import { Animate, ImageReveal, TextReveal } from '@/lib/animations';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('classes');
  return (
    <div className='relative h-screen min-h-[600px] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <ImageReveal>
          <Image
            src='/assets/takeclass.png'
            alt='Fitness Training Background'
            fill
            className='object-cover opacity-20'
          />
        </ImageReveal>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-indigo-900/80'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 h-full flex items-center justify-center'>
        <div className='text-center text-white'>
          <TextReveal delay={0.2}>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
              {t('heroTitle')} <span className='text-[#F7F225]'>{t('heroSubtitle')}</span>
            </h1>
          </TextReveal>
          <Animate variant='fadeInUp' delay={0.4}>
            <p className='text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed'>
              {t('heroDescription')}
            </p>
          </Animate>
        </div>
      </div>
    </div>
  );
}
