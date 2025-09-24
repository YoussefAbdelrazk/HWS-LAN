import SectionTitle from '@/components/shared/sectionTitle';
import { Button } from '@/components/ui/button';
import { Animate, HoverAnimation, ImageReveal, TextReveal } from '@/lib/animations';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale();
  return (
    <section className='py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Side - Content */}
          <Animate variant='fadeInLeft' delay={0.2} className='space-y-8'>
            {/* Main Heading */}
            <TextReveal delay={0.4}>
              <div className='space-y-4'>
                <SectionTitle title={t('title')} text={t('brandName')} />
              </div>
            </TextReveal>

            {/* Introduction */}
            <Animate variant='fadeInUp' delay={0.6}>
              <div className='space-y-6'>
                <p className='text-lg md:text-xl font-semibold text-[#1C1C1C] leading-relaxed'>
                  {t('introduction').split('Captain Sherif')[0]}
                  <span
                    className='relative text-black after:content-["_"] after:block after:w-full after:h-4
                  3 after:bg-[#F7F225]/50 after:absolute after:-bottom-1 after:left-0 after:-z-10'
                  >
                    {t('founder')}
                  </span>
                  {t('introduction').split('Captain Sherif')[1]}
                </p>

                {/* Description with vertical line */}
                <div className='relative pl-6 border-l-4 border-[#F7F225] space-y-4'>
                  <p className='text-base md:text-lg text-[#323232CC] leading-relaxed'>
                    {t('description')}
                  </p>
                </div>
                <div className='relative pl-6 border-l-4 border-[#F7F225] space-y-4'>
                  <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                    {t('additionalDescription')}
                  </p>
                </div>
              </div>
            </Animate>

            {/* CTA Buttons */}
            <Animate variant='fadeInUp' delay={0.8}>
              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <HoverAnimation type='scale'>
                  <Button className='bg-[#F7F225] hover:bg-[#E8CE23] text-black px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300'>
                    {t('becomeTrainer')}
                  </Button>
                </HoverAnimation>
                <HoverAnimation type='scale'>
                  <Button
                    variant='outline'
                    className='border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300'
                  >
                    {t('aboutCaptain')}
                  </Button>
                </HoverAnimation>
              </div>
            </Animate>
          </Animate>

          {/* Right Side - Images */}
          <Animate variant='fadeInRight' delay={0.4} className='relative'>
            {/* Bottom Image - Overlapping */}
            {locale === 'ar' && (
              <ImageReveal delay={0.6}>
                <div className='relative md:top-30 z-20'>
                  <div className='relative rounded overflow-hidden'>
                    <Image
                      src='/assets/About2.png'
                      alt='Hawssa Trainers - Professional fitness trainers in yellow Hawssa shirts'
                      width={200}
                      height={200}
                      className='w-96 h-96 object-cover'
                    />
                  </div>
                </div>
              </ImageReveal>
            )}
            {/* Top Image */}
            {locale === 'ar' && (
              <ImageReveal delay={0.8}>
                <div className='relative top-10 z-30 md:-top-20 md:right-50'>
                  <div className='relative rounded overflow-hidden'>
                    <Image
                      src='/assets/About1.png'
                      alt='Hawssa Dance Event - Energetic dance scene with cityscape and laser lights'
                      width={200}
                      height={200}
                      className='w-96 h-96 object-cover'
                    />
                  </div>
                </div>
              </ImageReveal>
            )}
            {locale === 'en' && (
              <ImageReveal delay={0.6}>
                <div className='relative top-10 z-30 md:top-30 md:right-10'>
                  <div className='relative rounded overflow-hidden'>
                    <Image
                      src='/assets/About2.png'
                      alt='Hawssa Dance Event - Energetic dance scene with cityscape and laser lights'
                      width={200}
                      height={200}
                      className='w-96 h-96 object-cover'
                    />
                  </div>
                </div>
              </ImageReveal>
            )}
            {locale === 'en' && (
              <ImageReveal delay={0.8}>
                <div className='relative top-10 z-30 md:-top-20 md:left-50'>
                  <div className='relative rounded overflow-hidden'>
                    <Image
                      src='/assets/About1.png'
                      alt='Hawssa Dance Event - Energetic dance scene with cityscape and laser lights'
                      width={200}
                      height={200}
                      className='w-96 h-96 object-cover'
                    />
                  </div>
                </div>
              </ImageReveal>
            )}

            {/* Decorative elements */}
            <Animate variant='scaleIn' delay={1.0}>
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-[#F7F225]/20 rounded-full blur-xl'></div>
            </Animate>
            <Animate variant='scaleIn' delay={1.2}>
              <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-[#E8CE23]/20 rounded-full blur-xl'></div>
            </Animate>
          </Animate>
        </div>
      </div>
    </section>
  );
}
