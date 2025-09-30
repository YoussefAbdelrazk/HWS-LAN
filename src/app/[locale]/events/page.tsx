import { Events as EventsComponent } from '@/components';
import { Team } from '@/components/features/About';
import { Hero } from '@/components/features/Events';
import { BannerPlatform, Experience } from '@/components/features/Home';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.events' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

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
