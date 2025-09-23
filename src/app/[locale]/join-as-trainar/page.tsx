import { Team } from '@/components/features/About';
import {
  Bannerjoin,
  FlexibleTraining,
  HawsaTot,
  Hero,
} from '@/components/features/Join-as-trainer';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function JoinAsTrainerPage({ params }: { params: Promise<{ locale: string }> } ) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <div>
      <Hero />

      <HawsaTot />
      <FlexibleTraining />
      <Bannerjoin />
      <Team />
    </div>
  );
}
