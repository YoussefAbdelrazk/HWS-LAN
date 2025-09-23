import SectionTitle from '@/components/shared/sectionTitle';
import { CornerDownRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HawsaTot() {
  const t = useTranslations('joinAsTrainer');
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='flex flex-col gap-4'>
        <SectionTitle title={t('whatIsHawssaTot')} text={t('hawssaTot')} />
        <h3 className='text-2xl font-semibold text-[#1C1C1C]'>{t('totProgram')}</h3>
        <p className='text-lg max-w-lg text-[#323232CC]'>{t('totDescription')}</p>

        <ul className=' flex flex-col gap-2 text-md text-[#323232CC]'>
          <li className='flex items-center gap-2'>
            <CornerDownRight className='text-[#F7F225]' />
            {t('accessArchive')}
          </li>
          <li className='flex items-center gap-2'>
            <CornerDownRight className='text-[#F7F225]' />
            {t('visibilityClients')}
          </li>
          <li className='flex items-center gap-2'>
            <CornerDownRight className='text-[#F7F225]' />
            {t('growInfluence')}
          </li>
        </ul>
      </div>
      {/* images */}
      <div className='relative'>
        <Image
          src='/assets/hawsatot.jpg'
          alt='Hawssa Tot'
          width={500}
          height={500}
          className='rounded-lg w-full h-[300px] object-cover'
        />
      </div>
    </div>
  );
}
