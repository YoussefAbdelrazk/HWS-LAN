import { callAPI } from '@/lib/utils/config';
import type { City, Government, Gym, Trainer, TakeAClassResponse } from '@/lib/types/locations';

export async function getGovernments(locale: string) {
  const response = await callAPI<Government[]>(
    'GET',
    `/api/${locale}/locations/governments`
  );
  return response;
}

export async function getCities(locale: string, governmentId: string) {
  const response = await callAPI<City[]>(
    'GET',
    `/api/${locale}/locations/governments/${governmentId}/cities`
  );
  return response;
}

export async function getTrainers(
  locale: string,
  search: string = '',
  page: number = 1,
  pageSize: number = 20
) {
  const response = await callAPI<Trainer[]>(
    'GET',
    `/api/${locale}/locations/trainers?search=${encodeURIComponent(search)}&page=${page}&pageSize=${pageSize}`
  );
  return response;
}

export async function getGyms(
  locale: string,
  search: string = '',
  page: number = 1,
  pageSize: number = 20
) {
  const response = await callAPI<Gym[]>(
    'GET',
    `/api/${locale}/locations/gyms?search=${encodeURIComponent(search)}&page=${page}&pageSize=${pageSize}`
  );
  return response;
}

export async function searchTakeAClass(
  locale: string,
  params: {
    governmentId?: string;
    cityId?: string;
    trainerId?: string;
    gymId?: string;
    page?: number;
    pageSize?: number;
  }
) {
  const { governmentId = '', cityId = '', trainerId = '', gymId = '', page = 1, pageSize = 20 } = params;
  const queryParams = new URLSearchParams({
    governmentId,
    cityId,
    trainerId,
    gymId,
    page: page.toString(),
    pageSize: pageSize.toString(),
  });

  const response = await callAPI<TakeAClassResponse>(
    'GET',
    `/api/${locale}/locations/takeaclass?${queryParams.toString()}`
  );
  return response;
}
