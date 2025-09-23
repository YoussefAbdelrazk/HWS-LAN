import SectionTitle from '@/components/shared/sectionTitle';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function OurVision() {
  const t = useTranslations('about');
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='flex flex-col gap-4'>
        <SectionTitle title={t('ourVision')} text={t('vision')} />
        <h3 className='text-2xl font-semibold'>{t('visionTitle')}</h3>
        <p className='text-lg text-[#323232CC]'>
          <span className='font-bold text-[#F7F225]/90'>HAWSSA® </span>
          {t('visionDescription')}
        </p>
      </div>

      <div className='relative'>
        <Image
          src='/assets/event2.png'
          alt='Our Vision'
          width={500}
          height={500}
          className='rounded-lg w-full h-[300px] object-cover'
        />
      </div>
    </div>
  );
}
