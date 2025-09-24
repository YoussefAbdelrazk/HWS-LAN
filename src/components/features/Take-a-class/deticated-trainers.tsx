import SectionTitle from '@/components/shared/sectionTitle';
import { Animate, HoverAnimation, StaggerContainer, StaggerItem } from '@/lib/animations';
import { trainersData } from '@/lib/data/trainers';
import { useTranslations } from 'next-intl';
import TrainerCard from './trainer-card';

export default function DedicatatedTrainers() {
  const t = useTranslations('classes');
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <Animate variant='fadeInUp' delay={0.2}>
        <div className='text-center space-y-4 mb-12'>
          <SectionTitle title={t('meetOur')} text={t('dedicatedTrainers')} />
          <p className='text-lg max-w-lg mx-auto text-[#323232CC]'>{t('dedicatedDescription')}</p>
        </div>
      </Animate>

      {/* Trainers Grid */}
      <StaggerContainer delay={0.1}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {trainersData.slice(0, 3).map(trainer => (
            <StaggerItem key={trainer.id}>
              <HoverAnimation type='lift'>
                <TrainerCard trainer={trainer} />
              </HoverAnimation>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </div>
  );
}
