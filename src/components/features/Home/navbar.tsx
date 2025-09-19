'use client';

import { Button } from '@/components/ui/button';
import { navbarItems } from '@/lib/data/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='w-full h-16 md:h-20 lg:h-28 flex items-center justify-between z-50 absolute top-0 left-0 right-0 px-4 md:px-6 lg:px-10 bg-black/20 backdrop-blur-lg text-white'>
      {/* logo */}
      <div className='flex-shrink-0'>
        <Image
          src='/assets/logo.png'
          alt='logo'
          width={60}
          height={60}
          className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain'
        />
      </div>

      {/* Desktop menu */}
      <div className='hidden lg:flex items-center gap-8 xl:gap-11'>
        {navbarItems.map(item => (
          <Link
            className='font-medium text-base xl:text-lg relative group transition-all duration-300 hover:text-yellow-400'
            key={item.id}
            href={item.href}
          >
            {item.name}
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F7F225] to-[#E8CE23] transition-all duration-300 group-hover:w-full'></span>
          </Link>
        ))}
      </div>

      {/* Desktop buttons */}
      <div className='hidden lg:flex items-center gap-3 xl:gap-4'>
        <Button className='bg-black/30 backdrop-blur-lg px-4 xl:px-6 py-2 xl:py-3 rounded-md border border-white/30 text-sm xl:text-base hover:bg-white/10 transition-all duration-300'>
          Login
        </Button>
        <Button className='bg-gradient-to-r from-[#F7F225] to-[#E8CE23] text-black px-4 xl:px-6 py-2 xl:py-3 rounded-md text-sm xl:text-base font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300'>
          Join Now
        </Button>
      </div>

      {/* Mobile menu button */}
      <button
        className='lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 group'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label='Toggle menu'
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </button>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-black/90 backdrop-blur-lg z-40 lg:hidden'>
          <div className='flex flex-col items-center justify-center h-full space-y-8'>
            {/* Mobile menu items */}
            <div className='flex flex-col items-center space-y-6'>
              {navbarItems.map(item => (
                <Link
                  className='font-medium text-xl relative group transition-all duration-300 hover:text-yellow-400'
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F7F225] to-[#E8CE23] transition-all duration-300 group-hover:w-full'></span>
                </Link>
              ))}
            </div>

            {/* Mobile buttons */}
            <div className='flex flex-col items-center space-y-4 mt-8'>
              <Button
                className='bg-white/10 backdrop-blur-lg px-8 py-3 rounded-md border border-white/30 text-base hover:bg-white/20 transition-all duration-300 w-48'
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Button>
              <Button
                className='bg-gradient-to-r from-[#F7F225] to-[#E8CE23] text-black px-8 py-3 rounded-md text-base font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 w-48'
                onClick={() => setIsMenuOpen(false)}
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
