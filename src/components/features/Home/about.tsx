import SectionTitle from '@/components/shared/sectionTitle';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function About() {
  return (
    <section className='py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden'>


      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Side - Content */}
          <div className='space-y-8'>
            {/* Main Heading */}
            <div className='space-y-4'>
              <SectionTitle title='About' text='Hawssa' />
            </div>

            {/* Introduction */}
            <div className='space-y-6'>
              <p className='text-lg md:text-xl font-semibold text-[#1C1C1C] leading-relaxed'>
                Founded by the visionary{' '}
                <span
                  className='relative text-black after:content-["_"] after:block after:w-full after:h-4
                3 after:bg-[#F7F225]/50 after:absolute after:-bottom-1 after:left-0 after:-z-10'
                >
                  Captain Sherif
                </span>
                , Hawssa Dance Fitness has revolutionized the way people experience fitness through
                dance.
              </p>

              {/* Description with vertical line */}
              <div className='relative pl-6 border-l-4 border-[#F7F225] space-y-4'>
                <p className='text-base md:text-lg text-[#323232CC] leading-relaxed'>
                  <span className='font-bold text-black'>HAWSSA®</span> is a mentor program guided
                  by amazing and professional trainers; we focus on easy but effective steps, fun
                  and trending music and as a plus we breakdown each choreography for easy learning.
                  Our target is to enlarge HAWSSA family, so we accept all ages, sizes, shapes, not
                  matter where you are from or how you look. We are here to dance with you while you
                  get fit.
                </p>
              </div>
              <div className='relative pl-6 border-l-4 border-[#F7F225] space-y-4'>
                <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                  Our target is to enlarge HAWSSA family, so we accept all ages, sizes, shapes, not
                  matter where you are from or how you look. We are here to dance with you while you
                  get fit.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <Button className='bg-[#F7F225] hover:bg-[#E8CE23] text-black px-8 py-6 text-lg font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300'>
                Become a Certified Trainer
              </Button>
              <Button
                variant='outline'
                className='border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300'
              >
                About Captain Sherif
              </Button>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className='relative '>
            {/* Bottom Image - Overlapping */}
            <div className='relative md:top-30  z-20'>
              <div className='relative rounded overflow-hidden '>
                <Image
                  src='/assets/About2.png'
                  alt='Hawssa Trainers - Professional fitness trainers in yellow Hawssa shirts'
                  width={200}
                  height={200}
                  className='w-96 h-96 object-cover'
                />
                {/* <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div> */}
              </div>
            </div>
            {/* Top Image */}
            <div className='relative top-10 z-30 md:-top-20 md:left-50'>
              <div className='relative rounded overflow-hidden '>
                <Image
                  src='/assets/About1.png'
                  alt='Hawssa Dance Event - Energetic dance scene with cityscape and laser lights'
                  width={200}
                  height={200}
                  className='w-96 h-96 object-cover'
                />
                {/* <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div> */}
              </div>
            </div>

            {/* Decorative elements */}
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-[#F7F225]/20 rounded-full blur-xl'></div>
            <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-[#E8CE23]/20 rounded-full blur-xl'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
