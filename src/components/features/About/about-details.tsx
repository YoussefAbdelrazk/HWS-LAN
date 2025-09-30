import { useTranslations } from 'next-intl';

export default function AboutDetails() {
  const t = useTranslations('about');

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      {/* Main Description */}
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
          {t('title')} <span className='text-[#F7F225]/90'>{t('brandName')}</span>
        </h2>
        <p className='text-lg text-[#323232CC] max-w-4xl mx-auto leading-relaxed'>
          {t('description')}
        </p>
      </div>

      {/* Certifications */}
      <div className='bg-gradient-to-r from-[#F7F225]/30 to-blue-600/10 rounded-2xl p-8 mb-16'>
        <h3 className='text-2xl font-bold text-center mb-8'>{t('certifications.title')}</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='text-center'>
            <div className='bg-white rounded-lg p-6 shadow-lg'>
              <h4 className='text-xl font-semibold mb-2 text-yellow-600'>
                {t('certifications.naseem')}
              </h4>
            </div>
          </div>
          <div className='text-center'>
            <div className='bg-white rounded-lg p-6 shadow-lg'>
              <h4 className='text-xl font-semibold mb-2 text-yellow-400'>
                {t('certifications.afaa')}
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Global Reach */}
      <div className='text-center mb-16'>
        <h3 className='text-2xl font-bold mb-4'>{t('globalReach.title')}</h3>
        <p className='text-lg text-[#323232CC]'>{t('globalReach.description')}</p>
      </div>

      {/* Target Audiences */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
        {/* For Practitioners */}
        <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='text-center mb-6'>
            <div className='w-16 h-16 bg-[#F7F225] rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl font-bold text-white'>👥</span>
            </div>
            <h3 className='text-xl font-bold text-[#F7F225]'>{t('forPractitioners.title')}</h3>
          </div>
          <p className='text-[#323232CC] leading-relaxed'>{t('forPractitioners.description')}</p>
        </div>

        {/* For Trainers */}
        <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='text-center mb-6'>
            <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl font-bold text-white'>🏋️</span>
            </div>
            <h3 className='text-xl font-bold text-blue-600'>{t('forTrainers.title')}</h3>
          </div>
          <p className='text-[#323232CC] leading-relaxed'>{t('forTrainers.description')}</p>
        </div>

        {/* For Arab Community */}
        <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='text-center mb-6'>
            <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl font-bold text-white'>🌍</span>
            </div>
            <h3 className='text-xl font-bold text-green-600'>{t('forArabCommunity.title')}</h3>
          </div>
          <p className='text-[#323232CC] leading-relaxed'>{t('forArabCommunity.description')}</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className='text-center'>
        <button className='bg-gradient-to-r from-[#F7F225] to-yellow-400 text-black font-bold py-4 px-8 rounded-full text-lg hover:from-yellow-400 hover:to-[#F7F225] transition-all duration-300 transform hover:scale-105'>
          {t('becomeTrainer')}
        </button>
      </div>
    </div>
  );
}
