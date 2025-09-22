import Image from 'next/image';

interface EventCardProps {
  title: string;
  subtitle: string;
  location: string;
  date: string;
  backgroundImage: string;
  isOnline?: boolean;
}

export default function EventCard({
  title,
  subtitle,
  location,
  date,
  backgroundImage,
  isOnline = false,
}: EventCardProps) {
  return (
    <div className='relative rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105'>
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={`${title} - ${subtitle}`}
        width={400}
        height={300}
        className='w-full h-[300px] object-cover'
      />

      {/* Top Badges */}
      <div className='absolute top-4 left-4 right-4 flex justify-between'>
        {/* Location Badge */}
        <div className='bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1'>
          <svg className='w-4 h-4 text-[#F7F225]' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
          </svg>
          <span className='text-white text-sm font-medium'>{location}</span>
        </div>

        {/* Date Badge */}
        <div className='bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1'>
          <svg className='w-4 h-4 text-[#F7F225]' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z' />
          </svg>
          <span className='text-white text-sm font-medium'>{date}</span>
        </div>
      </div>

      {/* Bottom Overlay with Title */}
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'>
        <div className='flex items-center space-x-2 mb-2'>
          {/* Yellow Double Arrow Icon */}
          <div className='flex space-x-1'>
            <svg className='w-5 h-5 text-[#F7F225]' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' />
            </svg>
            <svg className='w-5 h-5 text-[#F7F225]' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' />
            </svg>
          </div>
          <h3 className='text-white text-xl font-bold'>{title}</h3>
        </div>
        <p className='text-white text-lg font-medium'>{subtitle}</p>
      </div>
    </div>
  );
}
