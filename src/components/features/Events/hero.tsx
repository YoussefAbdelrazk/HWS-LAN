import { useTranslations } from 'next-intl';

export default function EventsHero() {
  const t = useTranslations('hero');
  return (
    <section
      className='bg-cover bg-center bg-no-repeat h-[100vh] min-h-[600px] w-full relative'
      style={{ backgroundImage: `url(/assets/eventshero.png)` }}
    >
      {/* overlay */}
      <div className='absolute inset-0 bg-linear-to-r from-[#F7F225]/30 to-[#000000]/70'></div>
      {/* content */}
      <div className='relative z-10 h-full flex items-center justify-center px-4 md:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-32'>
        <div className='text-white text-center max-w-7xl flex flex-col items-center justify-center gap-6 md:gap-8'>
          {/* Main heading */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold italic font-poppins tracking-wide leading-tight'>
            {t('eventsTitle')} <span className='text-[#F7F225]'>{t('eventsSubtitle')}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
