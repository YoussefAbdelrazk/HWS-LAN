import SectionTitle from '@/components/shared/sectionTitle';
import {
  Animate,
  HoverAnimation,
  ImageReveal,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from '@/lib/animations';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ImpactNumbers() {
  const t = useTranslations('impact');

  const impactNumbers = [
    {
      number: '500+',
      title: t('trainers'),
      text: t('trainersDescription'),
    },
    {
      number: '10,000+',
      title: t('videos'),
      text: t('videosDescription'),
    },
    {
      number: '50,000+',
      title: t('hours'),
      text: t('hoursDescription'),
    },
    {
      number: '100+',
      title: t('countries'),
      text: t('countriesDescription'),
    },
  ];
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-4'>
      {/* left side */}
      <Animate variant='fadeInLeft' delay={0.2} className='relative'>
        <ImageReveal delay={0.4}>
          <Image
            src='/assets/img.svg'
            alt='impactnumbers'
            width={500}
            height={500}
            className='rounded-lg w-[800px] lg:h-[600px] h-[400px] object-cover'
          />
        </ImageReveal>
        <Animate variant='scaleIn' delay={0.6}>
          <div className='absolute bg-[#F7F225] rounded p-6 -top-5 -left-6 -z-10 hidden sm:block'></div>
        </Animate>
        <Animate variant='scaleIn' delay={0.8}>
          <div className='absolute bg-[#F7F225] rounded p-6 -bottom-7 -right-5 -z-10 hidden sm:block'></div>
        </Animate>
      </Animate>

      {/* right side */}
      <Animate
        variant='fadeInRight'
        delay={0.4}
        className='flex flex-col items-center justify-center space-y-6'
      >
        <TextReveal delay={0.6}>
          <SectionTitle title={t('title')} text={t('subtitle')} />
        </TextReveal>
        <Animate variant='fadeInUp' delay={0.8}>
          <p className='text-lg max-w-md mx-auto relative pl-6 border-l-4 border-[#F7F225]'>
            {t('description')}
          </p>
        </Animate>

        <StaggerContainer delay={0.1}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {impactNumbers.map((number, index) => (
              <StaggerItem key={index}>
                <HoverAnimation type='lift'>
                  <div className='flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-lg'>
                    <h1 className='text-2xl font-bold'>{number.number}</h1>
                    <h3 className='text-lg font-semibold'>{number.title}</h3>
                    <p className='text-sm text-gray-600'>{number.text}</p>
                  </div>
                </HoverAnimation>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </Animate>
    </div>
  );
}
