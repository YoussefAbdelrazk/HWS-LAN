export interface Government {
  id: number;
  name: string;
}

export interface City {
  id: number;
  name: string;
}

export interface Trainer {
  id: number;
  name: string;
}

export interface Gym {
  id: number;
  gymName: string;
  trainer?: {
    id: number;
    name: string;
  };
}

export interface TakeAClassTrainer {
  trainerId: number;
  fullName: string;
  birthDate: string;
  imageUrl: string | null;
  mobileNumber: string;
  email: string;
  gender: string;
  gymName: string;
  address: string;
  googleMapsUrl: string;
  governmentName: string;
  cityName: string;
  availableDays: string[];
}

export interface TakeAClassFilters {
  governmentId: number | null;
  cityId: number | null;
  trainerId: number | null;
  gymId: number | null;
}

export interface TakeAClassPagination {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface TakeAClassResponse {
  filters: TakeAClassFilters;
  pagination: TakeAClassPagination;
  items: TakeAClassTrainer[];
}
