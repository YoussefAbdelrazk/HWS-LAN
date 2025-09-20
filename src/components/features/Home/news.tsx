'use client';
import SectionTitle from '@/components/shared/sectionTitle';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

export default function News() {
  const newsData = [
    {
      id: 1,
      title: 'New Dance Program Released',
      image: '/assets/event1.png',
    },
    {
      id: 2,
      title: 'App Reaches 20 Countries',
      image: '/assets/event2.png',
    },
    {
      id: 3,
      title: 'Trainer Live Sessions',
      image: '/assets/event3.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(newsData.length - itemsPerPage, prev + 1));
  };

  const visibleNews = newsData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      {/* Header Section */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-6'>
        <div>
           <SectionTitle title='Hawssa' text='Latest News & Updates' />
        <p>Checkout our latest news & events</p>
        </div>


        {/* Navigation Arrows */}
        <div className='flex space-x-2'>
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className='w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-lg flex items-center justify-center transition-colors duration-200'
            aria-label='Previous news'
          >
            <svg
              className='w-5 h-5 text-gray-700'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= newsData.length - itemsPerPage}
            className='w-10 h-10 sm:w-12 sm:h-12 bg-[#F7F225] hover:bg-[#E8CE23] disabled:bg-gray-100 disabled:cursor-not-allowed rounded-lg flex items-center justify-center transition-colors duration-200'
            aria-label='Next news'
          >
            <svg
              className='w-5 h-5 text-gray-900'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </div>
      </div>

      {/* News Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        {visibleNews.map(news => (
          <div key={news.id} className='relative group cursor-pointer'>
            <div className='relative overflow-hidden rounded-lg'>
              <Image
                src={news.image}
                alt={news.title}
                width={400}
                height={300}
                className='w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105'
              />

              {/* Dark overlay for text readability */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>

              {/* News title */}
              <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6'>
                <h3 className='text-white text-lg sm:text-xl font-semibold leading-tight'>
                  {news.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All News Button */}
      <div className='flex justify-center'>
        <Button className='bg-[#F7F225] hover:bg-[#E8CE23] text-black px-10 py-5 text-lg font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 border-1 border-[#000000]'>
          See All News
        </Button>
      </div>
    </div>
  );
}
