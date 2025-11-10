'use client';

import { Experience, ImpactNumbers } from '@/components/features/Home';
import {
  DedicatatedTrainers,
  HeroSection,
  PremiumTrainers,
  TrainerResults,
  TrainerSearch,
} from '@/components/features/Take-a-class';
import type { TakeAClassResponse } from '@/lib/types/locations';
import { useState } from 'react';

export default function TakeAClassContent() {
  const [results, setResults] = useState<TakeAClassResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleResultsChange = (newResults: TakeAClassResponse | null) => {
    setResults(newResults);
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section with Search */}
      <HeroSection />

      {/* Trainer Search/Filter Section */}
      <TrainerSearch onResultsChange={handleResultsChange} />

      {/* Search Results */}
      {results && <TrainerResults results={results} loading={loading} />}

      {/* Premium Trainers Section - Only show if no search results */}
      {!results && <PremiumTrainers />}

      {/* Dedicatated Trainers Section - Only show if no search results */}
      {!results && <DedicatatedTrainers />}

      <ImpactNumbers />
      <Experience />
    </div>
  );
}
