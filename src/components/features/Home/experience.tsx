import ExperienceCard from '@/components/shared/experiencecard';
import SectionTitle from '@/components/shared/sectionTitle';
import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations('experience');

  const experienceData = [
    {
      icon: (
        <svg className='w-8 h-8 text-black' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
        </svg>
      ),
      title: t('cidCertified.title'),
      description: [t('cidCertified.description1'), t('cidCertified.description2')],
    },
    {
      icon: (
        <svg className='w-8 h-8 text-black' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' />
        </svg>
      ),
      title: t('globalReach.title'),
      description: [t('globalReach.description1'), t('globalReach.description2')],
    },
    {
      icon: (
        <svg className='w-8 h-8 text-black' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
          <path d='M12 6l-1.5 3L8 10.5l3 1.5 1.5-3L16 7.5l-3-1.5z' fill='currentColor' />
        </svg>
      ),
      title: t('provenResults.title'),
      description: [t('provenResults.description1'), t('provenResults.description2')],
    },
  ];
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='text-center space-y-4 mb-12'>
        <SectionTitle title={t('title')} text={t('subtitle')} />
        <p className='max-w-xl mx-auto text-[#323232CC]'>{t('description')}</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {experienceData.map((item, index) => (
          <ExperienceCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
