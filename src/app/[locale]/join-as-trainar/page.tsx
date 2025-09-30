import { Team } from '@/components/features/About';
import {
  Bannerjoin,
  FlexibleTraining,
  HawsaTot,
  Hero,
} from '@/components/features/Join-as-trainer';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.joinAsTrainer' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

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
