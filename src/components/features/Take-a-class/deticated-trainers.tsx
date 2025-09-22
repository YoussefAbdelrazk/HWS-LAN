import SectionTitle from '@/components/shared/sectionTitle';
import { trainersData } from '@/lib/data/trainers';
import TrainerCard from './trainer-card';

export default function DedicatatedTrainers() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='text-center space-y-4 mb-12'>
        <SectionTitle title='Meet Our' text='Dedicated Trainers' />
        <p className='text-lg max-w-lg mx-auto text-[#323232CC]'>
          Certified professionals ready to guide your fitness journey
        </p>
      </div>
      {/* Trainers Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {trainersData.slice(0, 3).map(trainer => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
}
