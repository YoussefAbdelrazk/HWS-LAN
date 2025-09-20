import Image from 'next/image';

interface CertifiedCardProps {
  name: string;
  imageSrc: string;
}

export default function CertifiedCard({ name, imageSrc }: CertifiedCardProps) {
  return (
    <div className='relative rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105'>
      {/* Trainer Image */}
      <Image
        src={imageSrc}
        alt={`${name} - Hawssa Certified Trainer`}
        width={400}
        height={400}
        className='w-full h-[300px] object-cover'
      />

      {/* Dark overlay at bottom with name and arrow */}
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
        <div className='flex items-center justify-between bg-blur-xl backdrop-blur-xl rounded-full px-4 py-2'>
          <span className='text-white font-medium text-lg'>{name}</span>
          <div className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300'>
            <svg
              className='w-4 h-4 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
