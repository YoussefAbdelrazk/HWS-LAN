import SectionTitle from '@/components/shared/sectionTitle';
import { Animate, HoverAnimation, StaggerContainer, StaggerItem } from '@/lib/animations';
import { trainersData } from '@/lib/data/trainers';
import { Crown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import TrainerCard from './trainer-card';

export default function PremiumTrainers() {
  const t = useTranslations('classes');
  return (
    <div className='bg-gradient-to-br from-yellow-50 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Premium Trainers Banner */}
        <Animate variant='fadeInUp' delay={0.2}>
          <div className='text-center mb-12'>
            <Animate variant='scaleIn' delay={0.4}>
              <div className='inline-flex items-center gap-2 bg-[#F7F225] px-6 py-3 rounded-full mb-8'>
                <Crown className='w-5 h-5 text-gray-700' />
                <span className='text-gray-700 font-bold text-sm uppercase tracking-wide'>
                  {t('premiumTrainers')}
                </span>
              </div>
            </Animate>

            {/* Section Title */}
            <SectionTitle title={t('trainWithBest')} text={t('certifiedAndTrusted')} />

            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>{t('premiumDescription')}</p>
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
    </div>
  );
}
