'use client';

import { Button } from '@/components/ui/button';
import { Award, Calendar, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import type { TakeAClassTrainer } from '@/lib/types/locations';

interface TrainerResultCardProps {
  trainer: TakeAClassTrainer;
}

export default function TrainerResultCard({ trainer }: TrainerResultCardProps) {
  const t = useTranslations('classes');

  const location = `${trainer.cityName}, ${trainer.governmentName}`;

  return (
    <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
      {/* Trainer Image */}
      <div className='relative h-80'>
        {trainer.imageUrl ? (
          <Image
            src={trainer.imageUrl}
            alt={trainer.fullName}
            fill
            className='object-cover object-center'
            unoptimized
          />
        ) : (
          <div className='w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center'>
            <span className='text-gray-500 text-4xl font-bold'>{trainer.fullName.charAt(0)}</span>
          </div>
        )}

        {/* Location Tag */}
        <div className='absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-medium'>
          <MapPin className='w-3 h-3 text-[#F7F225]' />
          {location}
        </div>
      </div>

      {/* Trainer Info */}
      <div className='p-6 space-y-6'>
        {/* Trainer Name */}
        <h3 className='text-xl font-bold text-gray-900'>{trainer.fullName}</h3>

        {/* Gym Name */}
        <div className='flex items-center gap-2'>
          <span className='text-sm font-semibold text-gray-700'>{t('gymName')}:</span>
          <span className='text-sm text-gray-600'>{trainer.gymName}</span>
        </div>

        {/* Trainer Information */}
        <div className='space-y-3'>
          <h4 className='text-sm font-semibold text-gray-700 uppercase tracking-wide'>
            {t('trainerInformation')}
          </h4>
          <div className='space-y-2'>
            <div className='flex items-center gap-3 text-sm text-gray-600'>
              <Phone className='size-8 text-[#F7F225] bg-black p-1.5 rounded-full' />
              <span>
                {t('number')}: {trainer.mobileNumber}
              </span>
            </div>
            <div className='flex items-center gap-3 text-sm text-gray-600'>
              <MessageCircle className='size-8 text-[#F7F225] bg-black p-1.5 rounded-full' />
              <span>
                Email: {trainer.email}
              </span>
            </div>
            <div className='flex items-center gap-3 text-sm text-gray-600'>
              <MapPin className='size-8 text-[#F7F225] bg-black p-1.5 rounded-full' />
              <span>{trainer.address}</span>
            </div>
          </div>
        </div>

        {/* Available Days */}
        <div className='space-y-3'>
          <h4 className='text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2'>
            <Calendar className='w-4 h-4' />
            {t('trainerDays')}
          </h4>
          <div className='flex flex-wrap gap-2'>
            {trainer.availableDays.map((day, index) => (
              <span
                key={index}
                className='px-3 py-2 bg-black text-white text-xs font-medium rounded'
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col gap-2'>
          {trainer.googleMapsUrl && (
            <Button
              asChild
              variant='outline'
              className='w-full border-black text-black hover:bg-black hover:text-white transition-all duration-300'
            >
              <a href={trainer.googleMapsUrl} target='_blank' rel='noopener noreferrer'>
                <MapPin className='w-4 h-4 mr-2' />
                View on Map
              </a>
            </Button>
          )}
          <Button className='w-full bg-[#F7F225] hover:bg-[#E8CE23] text-black py-3 text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'>
            <MessageCircle className='w-4 h-4' />
            {t('bookNow')}
          </Button>
        </div>
      </div>
    </div>
  );
}
