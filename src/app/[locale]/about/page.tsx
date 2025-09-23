import {
  About as AboutComponent,
  AboutHero,
  Experience,
  Haswabanner,
  ImpactNumbers,
  OurVision,
  Team,
} from '@/components/features/About';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <>
      <AboutHero />
      <AboutComponent />
      <Experience />
      <OurVision />
      <ImpactNumbers />
      <Haswabanner />
      <Team />
    </>
  );
}
