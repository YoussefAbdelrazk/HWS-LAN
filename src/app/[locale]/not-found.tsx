'use client';

import { Button } from '@/components/ui/button';
import { Animate } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('errors');

  return (
    <div className='min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 md:px-6 lg:px-8 pt-20 md:pt-24'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Floating circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute rounded-full bg-gradient-to-r from-[#F7F225]/10 to-[#E8CE23]/10 blur-3xl'
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${10 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className='relative z-10 max-w-4xl w-full text-center'>
        {/* Large 404 with animation */}
        <Animate variant='scaleIn' delay={0.2} trigger='mount'>
          <div className='mb-8 md:mb-12'>
            <motion.div
              className='text-[120px] md:text-[180px] lg:text-[240px] font-bold leading-none'
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className='bg-gradient-to-r from-[#F7F225] via-[#E8CE23] to-[#F7F225] bg-clip-text text-transparent inline-block'>
                404
              </span>
            </motion.div>
          </div>
        </Animate>

        {/* Oops message */}
        <Animate variant='fadeInUp' delay={0.4} trigger='mount'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6'>
            {t('oops')}
          </h1>
        </Animate>

        {/* Lost in dance message */}
        <Animate variant='fadeInUp' delay={0.6} trigger='mount'>
          <p className='text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 md:mb-6 font-medium'>
            {t('lostInDance')}
          </p>
        </Animate>

        {/* Description */}
        <Animate variant='fadeInUp' delay={0.8} trigger='mount'>
          <p className='text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed'>
            {t('pageDoesntExist')}
          </p>
        </Animate>

        {/* Call to action */}
        <Animate variant='fadeInUp' delay={1} trigger='mount'>
          <p className='text-lg md:text-xl text-gray-300 mb-8 md:mb-10 font-medium'>
            {t('letsGetYouBack')}
          </p>
        </Animate>

        {/* Action buttons */}
        <Animate variant='fadeInUp' delay={1.2} trigger='mount'>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6'>
            <Link href='/'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-[#F7F225] to-[#E8CE23] text-black px-8 py-6 rounded-xl text-base md:text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-[200px]'
              >
                <Home className='w-5 h-5' />
                {t('backToHome')}
              </Button>
            </Link>
            <Link href='/take-a-class'>
              <Button
                size='lg'
                variant='outline'
                className='border-2 border-white/30 bg-black/30 backdrop-blur-lg text-white px-8 py-6 rounded-xl text-base md:text-lg font-semibold hover:bg-white/10 hover:border-[#F7F225] transition-all duration-300 flex items-center gap-2 min-w-[200px]'
              >
                <Search className='w-5 h-5' />
                {t('exploreClasses')}
              </Button>
            </Link>
          </div>
        </Animate>

        {/* Decorative dancing elements */}
        <Animate variant='fadeIn' delay={1.4} trigger='mount'>
          <div className='mt-12 md:mt-16 flex items-center justify-center gap-2 md:gap-4'>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className='w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-[#F7F225] to-[#E8CE23]'
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </Animate>
      </div>

      {/* Bottom decorative wave */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none' />
    </div>
  );
}
