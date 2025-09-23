import {
  About,
  Banner,
  BannerPlatform,
  CertifiedTrainer,
  Events,
  Experience,
  Haswabanner,
  Hero,
  ImpactNumbers,
  News,
} from '@/components/features/Home';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('events');

  return (
    <>
      <Hero />
      <About />
      <CertifiedTrainer />
      <Experience />
      <Banner />
      <Events title={t('title')} text={t('subtitle')} />
      <BannerPlatform />
      <ImpactNumbers />
      <Haswabanner />
      <News />
    </>
  );
}
