'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Filter, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function TrainerSearch() {
  const t = useTranslations('classes');
  const [searchData, setSearchData] = useState({
    trainerName: '',
    gymName: '',
    governmentName: '',
    cityName: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    console.log('Search data:', searchData);
    // Implement search logic here
  };

  return (
    <div className='bg-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Search Form */}
        <div className='bg-white rounded-2xl shadow-2xl p-6 md:p-8 -mt-50 relative z-20'>
          <Tabs defaultValue='filter' className='w-full'>
            <TabsList className='grid w-full grid-cols-2 mb-8'>
              <TabsTrigger value='nearby' className='flex items-center gap-2'>
                {t('nearbyGyms')}
              </TabsTrigger>
              <TabsTrigger value='filter' className='flex items-center gap-2'>
                <Filter className='w-4 h-4' />
                {t('filter')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value='nearby' className='space-y-4'>
              <div className='text-center py-8'>
                <p className='text-gray-500'>{t('nearbyGymsComingSoon')}</p>
              </div>
            </TabsContent>

            <TabsContent value='filter' className='space-y-6'>
              {/* First Row */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <Label htmlFor='trainerName' className='text-sm font-medium text-gray-700'>
                    {t('trainerName')}
                  </Label>
                  <div className='relative'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                    <Input
                      id='trainerName'
                      type='text'
                      placeholder={t('trainerNamePlaceholder')}
                      value={searchData.trainerName}
                      onChange={e => handleInputChange('trainerName', e.target.value)}
                      className='pl-10 focus:ring-[#F7F225] focus:border-[#F7F225]'
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='gymName' className='text-sm font-medium text-gray-700'>
                    {t('gymName')}
                  </Label>
                  <div className='relative'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                    <Input
                      id='gymName'
                      type='text'
                      placeholder={t('gymNamePlaceholder')}
                      value={searchData.gymName}
                      onChange={e => handleInputChange('gymName', e.target.value)}
                      className='pl-10 focus:ring-[#F7F225] focus:border-[#F7F225]'
                    />
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <Label htmlFor='governmentName' className='text-sm font-medium text-gray-700'>
                    {t('governmentName')}
                  </Label>
                  <div className='relative'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                    <Input
                      id='governmentName'
                      type='text'
                      placeholder={t('governmentNamePlaceholder')}
                      value={searchData.governmentName}
                      onChange={e => handleInputChange('governmentName', e.target.value)}
                      className='pl-10 focus:ring-[#F7F225] focus:border-[#F7F225]'
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='cityName' className='text-sm font-medium text-gray-700'>
                    {t('cityName')}
                  </Label>
                  <div className='relative'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                    <Input
                      id='cityName'
                      type='text'
                      placeholder={t('cityNamePlaceholder')}
                      value={searchData.cityName}
                      onChange={e => handleInputChange('cityName', e.target.value)}
                      className='pl-10 focus:ring-[#F7F225] focus:border-[#F7F225]'
                    />
                  </div>
                </div>
              </div>

              {/* Apply Filter Button */}
              <div className='flex justify-end pt-4'>
                <Button
                  onClick={handleSearch}
                  className='bg-[#F7F225] hover:bg-[#E8CE23] text-black px-8 py-3 text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300'
                >
                  {t('applyFilter')}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
