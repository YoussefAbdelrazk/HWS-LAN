'use client';

import { Button } from '@/components/ui/button';
import { navbarItems } from '@/lib/data/navbar';
import { ChevronRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`w-full h-16 md:h-20 lg:h-28 flex items-center justify-between z-50 fixed top-0 left-0 right-0 px-4 md:px-6 lg:px-10 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-xl shadow-2xl' : 'bg-black/20 backdrop-blur-lg'
        } text-white`}
      >
        {/* Logo */}
        <div className='flex-shrink-0 z-50'>
          <Link href='/' className='block'>
            <Image
              src='/assets/logo.png'
              alt='Hawssa Logo'
              width={60}
              height={60}
              className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-300 hover:scale-110'
            />
          </Link>
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
          className='lg:hidden relative z-50 p-2 rounded-lg hover:bg-white/10 transition-all duration-300'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          <div className='w-6 h-6 flex items-center justify-center'>
            {isMenuOpen ? (
              <X className='w-6 h-6 text-white' />
            ) : (
              <Menu className='w-6 h-6 text-white' />
            )}
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className='absolute inset-0 bg-black/80 backdrop-blur-sm'
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu header */}
          <div className='flex items-center justify-between p-6 border-b border-white/10'>
            <div className='flex items-center gap-3'>
              <Image
                src='/assets/logo.png'
                alt='Hawssa Logo'
                width={40}
                height={40}
                className='w-10 h-10 object-contain'
              />
              <span className='text-white font-bold text-lg'>Hawssa</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className='p-2 rounded-lg hover:bg-white/10 transition-colors duration-200'
              aria-label='Close menu'
            >
              <X className='w-5 h-5 text-white' />
            </button>
          </div>

          {/* Menu content */}
          <div className='flex flex-col h-full'>
            {/* Navigation items */}
            <div className='flex-1 px-6 py-8 space-y-2'>
              {navbarItems.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className='group flex items-center justify-between py-4 px-4 rounded-xl hover:bg-white/5 transition-all duration-300 transform hover:translate-x-2'
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className='text-white font-medium text-lg group-hover:text-[#F7F225] transition-colors duration-300'>
                    {item.name}
                  </span>
                  <ChevronRight className='w-5 h-5 text-white/50 group-hover:text-[#F7F225] group-hover:translate-x-1 transition-all duration-300' />
                </Link>
              ))}
            </div>

            {/* Action buttons */}
            <div className='p-6 border-t border-white/10 space-y-4'>
              <Button
                className='w-full bg-white/10 backdrop-blur-lg px-6 py-4 rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300 text-base font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Button>
              <Button
                className='w-full bg-gradient-to-r from-[#F7F225] to-[#E8CE23] text-black px-6 py-4 rounded-xl text-base font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
