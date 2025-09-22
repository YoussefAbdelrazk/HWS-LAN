import SectionTitle from '@/components/shared/sectionTitle';
import { ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function FlexibleTraining() {
  const cards = [
    {
      title: 'Onsite Training',
      description: 'Join our live in-person sessions and connect with other trainers',
      image: '/assets/FlexibleCard1.jpg',
    },
    {
      title: 'Online Training',
      description: 'Train from anywhere, interact with students in real time',
      image: '/assets/flexiblecard2.jpg',
    },
    {
      title: 'Hybrid Training',
      description: 'Train from anywhere, interact with students in real time',
      image: '/assets/event1.png',
    },
  ];
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      {/* Header Section */}
      <div className='text-center mb-12 space-y-4'>
        <SectionTitle title='Flexible ' text=' Training Ways' />
        <p>Choose Your Training Path Flexible Options to Fit Your Lifestyle and Grow Your Skills</p>
      </div>

      {/* Training Options Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {cards.map((card, index) => (
          <div
            key={index}
            className='relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            {/* Card Image */}
            <div className='relative h-80'>
              <Image src={card.image} alt={card.title} fill className='object-cover' />
              {/* Overlay for better text readability */}
              <div className='absolute inset-0 bg-black/30'></div>
            </div>

            {/* Text Overlay */}
            <div className='absolute bottom-4 left-4 text-white'>
              <div className='flex items-center gap-2 mb-2'>
                <Play className='w-6 h-6' />
                <h3 className='text-2xl font-bold'>{card.title}</h3>
              </div>
              <p className='text-sm opacity-90 max-w-48'>{card.description}</p>
            </div>

            {/* Read More Button */}
            <div className='absolute top-4 right-4'>
              <button className='bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-white transition-colors flex items-center gap-1'>
                Read More Details
                <ChevronRight className='w-3 h-3' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
