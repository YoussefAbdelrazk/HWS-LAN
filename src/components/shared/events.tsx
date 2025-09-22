import EventCard from '@/components/shared/eventcard';
import SectionTitle from '@/components/shared/sectionTitle';
import { Button } from '@/components/ui/button';

const eventsData = [
  {
    title: 'Move Your Body Global',
    subtitle: 'Online',
    location: 'YouTube Live',
    date: '15 March 2025',
    backgroundImage: '/assets/event1.png',
    isOnline: true,
  },
  {
    title: 'Hawsaa World Tour',
    subtitle: 'Dubai Edition',
    location: 'Dubai, UAE',
    date: '15 March 2025',
    backgroundImage: '/assets/event2.png',
    isOnline: false,
  },
  {
    title: 'Hawsaa International',
    subtitle: 'Dance Festival',
    location: 'Cairo, Egypt',
    date: '15 March 2025',
    backgroundImage: '/assets/event3.png',
    isOnline: false,
  },
];

export default function Events({title,text}:{title:string,text:string}) {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='text-center space-y-4 mb-12'>
        <SectionTitle title={title} text={text} />
        <p className='max-w-xl mx-auto text-[#323232CC]'>Checkout our latest news & events</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {eventsData.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            subtitle={event.subtitle}
            location={event.location}
            date={event.date}
            backgroundImage={event.backgroundImage}
            isOnline={event.isOnline}
          />
        ))}
      </div>
      <div className='flex justify-center mt-12'>
        <Button className='bg-[#F7F225] hover:bg-[#E8CE23] text-black px-8 py-6 text-md font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 border-1 border-[#000000]'>Become a Certified Trainer</Button>
      </div>
    </div>
  );
}
