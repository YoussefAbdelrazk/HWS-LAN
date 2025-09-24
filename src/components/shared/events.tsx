import EventCard from '@/components/shared/eventcard';
import SectionTitle from '@/components/shared/sectionTitle';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { StaggerContainer, StaggerItem, Animate, HoverAnimation } from '@/lib/animations';

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

export default function Events({ title, text }: { title: string; text: string }) {
  const t = useTranslations('events');

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <Animate variant="fadeInUp" delay={0.2}>
        <div className='text-center space-y-4 mb-12'>
          <SectionTitle title={title} text={text} />
          <p className='max-w-xl mx-auto text-[#323232CC]'>{t('upcomingEvents')}</p>
        </div>
      </Animate>

      <StaggerContainer delay={0.1}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {eventsData.map((event, index) => (
            <StaggerItem key={index}>
              <HoverAnimation type="lift">
                <EventCard
                  title={event.title}
                  subtitle={event.subtitle}
                  location={event.location}
                  date={event.date}
                  backgroundImage={event.backgroundImage}
                  isOnline={event.isOnline}
                />
              </HoverAnimation>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
      
      <Animate variant="fadeInUp" delay={0.8}>
        <div className='flex justify-center mt-12'>
          <HoverAnimation type="scale">
            <Button className='bg-[#F7F225] hover:bg-[#E8CE23] text-black px-8 py-6 text-md font-semibold rounded-lg hover:shadow-lg transition-all duration-300 border-1 border-[#000000]'>
              {t('registerNow')}
            </Button>
          </HoverAnimation>
        </div>
      </Animate>
    </div>
  );
}
