import { Experience, ImpactNumbers } from '@/components/features/Home';
import {
  DedicatatedTrainers,
  HeroSection,
  PremiumTrainers,
  TrainerSearch,
} from '@/components/features/Take-a-class';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function TakeAClassPage({ params }: { params: Promise<{ locale: string }> }  ) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <div className='min-h-screen'>
      {/* Hero Section with Search */}
      <HeroSection />

      {/* Trainer Search/Filter Section */}
      <TrainerSearch />

      {/* Premium Trainers Section */}
      <PremiumTrainers />

      {/* Dedicatated Trainers Section */}
      <DedicatatedTrainers />

      <ImpactNumbers />
      <Experience />
    </div>
  );
}
