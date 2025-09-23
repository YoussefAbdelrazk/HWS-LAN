import { Button } from '@/components/ui/button';
import { Award, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface TrainerCardProps {
  trainer: {
    id: string;
    name: string;
    image: string;
    location: string;
    isCertified: boolean;
    phone: string;
    whatsapp: string;
    gymPhone: string;
    gymWhatsapp: string;
    availableDays: string[];
  };
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
  const t = useTranslations('classes');
  return (
    <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
      {/* Trainer Image */}
      <div className='relative h-80'>
        <Image src={trainer.image} alt={trainer.name} fill className='object-cover object-center' />

        {/* Location Tag */}
        <div className='absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-medium'>
          <MapPin className='w-3 h-3 text-[#F7F225]' />
          {trainer.location}
        </div>

        {/* Certification Tag */}
        {trainer.isCertified && (
          <div className='absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-medium'>
            <Award className='w-3 h-3 text-[#F7F225]' />
            {t('certifiedTrainer')}
          </div>
        )}
      </div>

      {/* Trainer Info */}
      <div className='p-6 space-y-6'>
        {/* Trainer Name */}
        <h3 className='text-xl font-bold text-gray-900'>{trainer.name}</h3>

        {/* Trainer Information */}
        <div className='space-y-3'>
          <h4 className='text-sm font-semibold text-gray-700 uppercase tracking-wide'>
            {t('trainerInformation')}
          </h4>
          <div className='space-y-2 '>
            <div className='flex items-center gap-3 text-sm text-gray-600'>
              <Phone className='size-8 text-[#F7F225] bg-black p-1.5  rounded-full' />
              <span>
                {t('number')}: {trainer.phone}
              </span>
            </div>
            <div className='flex items-center gap-3 text-sm text-gray-600'>
              <MessageCircle className='size-8 text-[#F7F225] bg-black p-1.5  rounded-full' />
              <span>
                {t('whatsapp')}: {trainer.whatsapp}
              </span>
            </div>
          </div>
        </div>

        {/* Gym Information */}
        <div className='space-y-3'>
          <h4 className='text-sm font-semibold text-gray-700 uppercase tracking-wide'>
            {t('gymInformation')}
          </h4>
          <div className='space-y-2'>
            <div className='flex items-center gap-3 text-sm text-gray-600'>
              <Phone className='size-8 text-black bg-[#F7F225] p-1.5  rounded-full' />
              <span>
                {t('number')}: {trainer.gymPhone}
              </span>
            </div>
            <div className='flex items-center gap-3 text-sm text-gray-600'>
              <MessageCircle className='size-8 text-black bg-[#F7F225] p-1.5  rounded-full' />
              <span>
                {t('whatsapp')}: {trainer.gymWhatsapp}
              </span>
            </div>
          </div>
        </div>

        {/* Available Days */}
        <div className='space-y-3'>
          <h4 className='text-sm font-semibold text-gray-700 uppercase tracking-wide'>
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

        {/* Book Now Button */}
        <Button className='w-full bg-[#F7F225] hover:bg-[#E8CE23] text-black py-3 text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'>
          <MapPin className='w-4 h-4' />
          {t('bookNow')}
        </Button>
      </div>
    </div>
  );
}
