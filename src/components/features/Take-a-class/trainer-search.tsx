'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  getCities,
  getGovernments,
  getGyms,
  getTrainers,
  searchTakeAClass,
} from '@/lib/services/locations';
import type { City, Government, Gym, TakeAClassResponse, Trainer } from '@/lib/types/locations';
import { Filter } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface SearchFormData {
  governmentId: string;
  cityId: string;
  trainerId: string;
  gymId: string;
}

interface TrainerSearchProps {
  onResultsChange?: (results: TakeAClassResponse | null) => void;
}

export default function TrainerSearch({ onResultsChange }: TrainerSearchProps) {
  const t = useTranslations('classes');
  const locale = useLocale();
  const [governments, setGovernments] = useState<Government[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [gyms, setGyms] = useState<Gym[]>([]);
  const [loading, setLoading] = useState({
    governments: false,
    cities: false,
    trainers: false,
    gyms: false,
    submit: false,
  });

  const form = useForm<SearchFormData>({
    defaultValues: {
      governmentId: '',
      cityId: '',
      trainerId: '',
      gymId: '',
    },
  });

  const watchedGovernmentId = form.watch('governmentId');

  // Helper function to extract array from response data
  const extractArrayData = <T,>(data: unknown): T[] => {
    if (Array.isArray(data)) {
      return data;
    }
    if (data && typeof data === 'object') {
      const obj = data as Record<string, unknown>;
      if (Array.isArray(obj.items)) return obj.items as T[];
      if (Array.isArray(obj.data)) return obj.data as T[];
    }
    return [];
  };

  // Fetch governments on mount
  useEffect(() => {
    const fetchGovernments = async () => {
      setLoading(prev => ({ ...prev, governments: true }));
      const response = await getGovernments(locale);
      console.log('Governments response:', response);
      if (response.success && response.data) {
        const data = extractArrayData<Government>(response.data);
        console.log('Governments data:', data);
        setGovernments(data);
      }
      setLoading(prev => ({ ...prev, governments: false }));
    };
    fetchGovernments();
  }, [locale]);

  // Fetch cities when government changes
  useEffect(() => {
    if (watchedGovernmentId) {
      const fetchCities = async () => {
        setLoading(prev => ({ ...prev, cities: true }));
        form.setValue('cityId', ''); // Reset city when government changes
        const response = await getCities(locale, watchedGovernmentId);
        console.log('Cities response:', response);
        if (response.success && response.data) {
          const data = extractArrayData<City>(response.data);
          console.log('Cities data:', data);
          setCities(data);
        }
        setLoading(prev => ({ ...prev, cities: false }));
      };
      fetchCities();
    } else {
      setCities([]);
      form.setValue('cityId', '');
    }
  }, [watchedGovernmentId, locale, form]);

  // Fetch trainers on mount and when search changes
  useEffect(() => {
    const fetchTrainers = async () => {
      setLoading(prev => ({ ...prev, trainers: true }));
      const response = await getTrainers(locale, '', 1, 20);
      console.log('Trainers response:', response);
      if (response.success && response.data) {
        const data = extractArrayData<Trainer>(response.data);
        console.log('Trainers data:', data);
        setTrainers(data);
      }
      setLoading(prev => ({ ...prev, trainers: false }));
    };
    fetchTrainers();
  }, [locale]);

  // Fetch gyms on mount and when search changes
  useEffect(() => {
    const fetchGyms = async () => {
      setLoading(prev => ({ ...prev, gyms: true }));
      const response = await getGyms(locale, '', 1, 20);
      console.log('Gyms response:', response);
      if (response.success && response.data) {
        const data = extractArrayData<Gym>(response.data);
        console.log('Gyms data:', data);
        setGyms(data);
      }
      setLoading(prev => ({ ...prev, gyms: false }));
    };
    fetchGyms();
  }, [locale]);

  const handleTrainerSearch = async (search: string) => {
    setLoading(prev => ({ ...prev, trainers: true }));
    const response = await getTrainers(locale, search, 1, 20);
    if (response.success && response.data) {
      const data = extractArrayData<Trainer>(response.data);
      setTrainers(data);
    }
    setLoading(prev => ({ ...prev, trainers: false }));
  };

  const handleGymSearch = async (search: string) => {
    setLoading(prev => ({ ...prev, gyms: true }));
    const response = await getGyms(locale, search, 1, 20);
    if (response.success && response.data) {
      const data = extractArrayData<Gym>(response.data);
      setGyms(data);
    }
    setLoading(prev => ({ ...prev, gyms: false }));
  };

  const onSubmit = async (data: SearchFormData) => {
    setLoading(prev => ({ ...prev, submit: true }));
    const response = await searchTakeAClass(locale, {
      governmentId: data.governmentId || undefined,
      cityId: data.cityId || undefined,
      trainerId: data.trainerId || undefined,
      gymId: data.gymId || undefined,
      page: 1,
      pageSize: 20,
    });
    setLoading(prev => ({ ...prev, submit: false }));

    if (response.success && response.data) {
      // The API returns data directly as TakeAClassResponse structure
      const resultData = response.data as unknown as TakeAClassResponse;
      if (resultData && resultData.items && Array.isArray(resultData.items)) {
        onResultsChange?.(resultData);
      } else {
        console.error('Invalid response structure:', resultData);
        onResultsChange?.(null);
      }
    } else {
      console.error('Search failed:', response.message);
      onResultsChange?.(null);
    }
  };

  return (
    <div className='bg-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Search Form */}
        <div className='bg-white rounded-2xl shadow-2xl p-6 md:p-8 -mt-50 relative z-20'>
          <Tabs defaultValue='filter' className='w-full'>
            <TabsList className=''>
              <TabsTrigger value='filter' className='flex items-center gap-2'>
                <Filter className='w-4 h-4' />
                {t('filter')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value='filter' className='space-y-6'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                  {/* First Row */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='trainerId'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-sm font-medium text-gray-700'>
                            {t('trainerName')}
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value ? String(field.value) : ''}
                            onOpenChange={open => {
                              if (open && trainers.length === 0) {
                                handleTrainerSearch('');
                              }
                            }}
                          >
                            <FormControl>
                              <SelectTrigger className='w-full focus:ring-[#F7F225] focus:border-[#F7F225]'>
                                <SelectValue placeholder={t('trainerNamePlaceholder')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {loading.trainers ? (
                                <SelectItem value='loading' disabled>
                                  Loading...
                                </SelectItem>
                              ) : trainers.length > 0 ? (
                                trainers.map(trainer => (
                                  <SelectItem key={trainer.id} value={String(trainer.id)}>
                                    {trainer.name}
                                  </SelectItem>
                                ))
                              ) : (
                                <SelectItem value='no-results' disabled>
                                  No trainers found
                                </SelectItem>
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='gymId'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-sm font-medium text-gray-700'>
                            {t('gymName')}
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value ? String(field.value) : ''}
                            onOpenChange={open => {
                              if (open && gyms.length === 0) {
                                handleGymSearch('');
                              }
                            }}
                          >
                            <FormControl>
                              <SelectTrigger className='w-full focus:ring-[#F7F225] focus:border-[#F7F225]'>
                                <SelectValue placeholder={t('gymNamePlaceholder')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {loading.gyms ? (
                                <SelectItem value='loading' disabled>
                                  Loading...
                                </SelectItem>
                              ) : gyms.length > 0 ? (
                                gyms.map(gym => (
                                  <SelectItem key={gym.id} value={String(gym.id)}>
                                    {gym.gymName}
                                  </SelectItem>
                                ))
                              ) : (
                                <SelectItem value='no-results' disabled>
                                  No gyms found
                                </SelectItem>
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Second Row */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='governmentId'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-sm font-medium text-gray-700'>
                            {t('governmentName')}
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value ? String(field.value) : ''}
                            disabled={loading.governments}
                          >
                            <FormControl>
                              <SelectTrigger className='w-full focus:ring-[#F7F225] focus:border-[#F7F225]'>
                                <SelectValue placeholder={t('governmentNamePlaceholder')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {loading.governments ? (
                                <SelectItem value='loading' disabled>
                                  Loading...
                                </SelectItem>
                              ) : governments.length > 0 ? (
                                governments.map(government => (
                                  <SelectItem key={government.id} value={String(government.id)}>
                                    {government.name}
                                  </SelectItem>
                                ))
                              ) : (
                                <SelectItem value='no-results' disabled>
                                  No governments found
                                </SelectItem>
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='cityId'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-sm font-medium text-gray-700'>
                            {t('cityName')}
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value ? String(field.value) : ''}
                            disabled={!watchedGovernmentId || loading.cities}
                          >
                            <FormControl>
                              <SelectTrigger className='w-full focus:ring-[#F7F225] focus:border-[#F7F225]'>
                                <SelectValue
                                  placeholder={
                                    !watchedGovernmentId
                                      ? 'Select government first'
                                      : t('cityNamePlaceholder')
                                  }
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {loading.cities ? (
                                <SelectItem value='loading' disabled>
                                  Loading...
                                </SelectItem>
                              ) : cities.length > 0 ? (
                                cities.map(city => (
                                  <SelectItem key={city.id} value={String(city.id)}>
                                    {city.name}
                                  </SelectItem>
                                ))
                              ) : watchedGovernmentId ? (
                                <SelectItem value='no-results' disabled>
                                  No cities found
                                </SelectItem>
                              ) : (
                                <SelectItem value='select-government' disabled>
                                  Select a government first
                                </SelectItem>
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Apply Filter Button */}
                  <div className='flex justify-end pt-4'>
                    <Button
                      type='submit'
                      disabled={loading.submit}
                      className='bg-[#F7F225] hover:bg-[#E8CE23] text-black px-8 py-3 text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                      {loading.submit ? 'Loading...' : t('applyFilter')}
                    </Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
