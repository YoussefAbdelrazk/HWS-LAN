import { Experience, ImpactNumbers } from '@/components/features/Home';
import { DedicatatedTrainers, HeroSection, PremiumTrainers, TrainerSearch } from '@/components/features/Take-a-class';

export default function TakeAClassPage() {
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

      <ImpactNumbers/>
      <Experience/>
    </div>
  );
}
