import {
  About as AboutComponent,
  AboutDetails,
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
      <AboutDetails />
      <AboutComponent />
      <Experience />
      <OurVision />
      <ImpactNumbers />
      <Haswabanner />
      <Team />
    </>
  );
}
