import CertifiedCard from '@/components/shared/certifiedcard';
import SectionTitle from '@/components/shared/sectionTitle';
import { Button } from '@/components/ui/button';

const trainers = [
  { name: 'Sherif Franca', imageSrc: '/assets/trainer1.png' },
  { name: 'Maria Rodriguez', imageSrc: '/assets/trainer2.png' },
  { name: 'Ahmed Hassan', imageSrc: '/assets/trainer3.png' },
  { name: 'Priya Sharma', imageSrc: '/assets/trainer4.png' },
  { name: 'Carlos Santos', imageSrc: '/assets/trainer5.png' },
  { name: 'Santos Rodriguez', imageSrc: '/assets/trainer6.png' },
];

export default function CertifiedTrainer() {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='text-center space-y-4 mb-12'>
        <SectionTitle title='Become a Hawssa ' text='Certified Trainer' />
        <p className='max-w-xl mx-auto text-[#323232CC]'>
          Join our global community of certified instructors and share the joy of Hawssa dance
          fitness with others. Transform lives while building your fitness career.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {trainers.map((trainer, index) => (
          <CertifiedCard key={index} name={trainer.name} imageSrc={trainer.imageSrc} />
        ))}
      </div>
      <div className='flex justify-center mt-12'>
        <Button className='bg-[#F7F225] hover:bg-[#E8CE23] text-black px-8 py-6 text-md font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-[#000000]'>Become a Certified Trainer</Button>
      </div>
    </section>
  );
}
