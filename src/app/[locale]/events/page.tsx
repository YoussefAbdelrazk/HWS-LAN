import { Events as EventsComponent } from '@/components';
import { Team } from '@/components/features/About';
import { Hero } from '@/components/features/Events';
import { BannerPlatform, Experience } from '@/components/features/Home';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { use } from 'react';

export default function Events({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('events');

  return (
    <div>
      <Hero />
      <EventsComponent title={t('title')} text={t('subtitle')} />
      <Experience />
      <BannerPlatform />
      <Team />
    </div>
  );
}
