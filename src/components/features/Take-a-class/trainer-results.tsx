'use client';

import SectionTitle from '@/components/shared/sectionTitle';
import { Animate, StaggerContainer, StaggerItem } from '@/lib/animations';
import type { TakeAClassResponse } from '@/lib/types/locations';
import TrainerResultCard from './trainer-result-card';

interface TrainerResultsProps {
  results: TakeAClassResponse | null;
  loading?: boolean;
}

export default function TrainerResults({ results, loading }: TrainerResultsProps) {
  if (loading) {
    return (
      <div className='bg-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <p className='text-gray-600'>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!results || !results.items || results.items.length === 0) {
    return null;
  }

  return (
    <div className='bg-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Animate variant='fadeInUp' delay={0.2}>
          <div className='text-center space-y-4 mb-12'>
            <SectionTitle
              title='Search Results'
              text={`Found ${results.pagination.totalItems} trainers`}
            />
            {/* {results.pagination.totalItems > 0 && (
              <p className='text-sm text-gray-600'>
                {`Showing ${
                  (results.pagination.page - 1) * results.pagination.pageSize + 1
                }-${Math.min(
                  results.pagination.page * results.pagination.pageSize,
                  results.pagination.totalItems,
                )} of ${results.pagination.totalItems} results`}
              </p>
            )} */}
          </div>
        </Animate>

        {/* Trainers Grid */}
        <StaggerContainer delay={0.1}>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {results.items.map(trainer => (
              <StaggerItem key={trainer.trainerId}>
                <TrainerResultCard trainer={trainer} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </div>
  );
}
