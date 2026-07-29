import {
  Camper,
  CamperDetails,
  CampersResponse,
  FilterOptions,
  Review,
} from '@/type/Trucks';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://campers-api.goit.study',
});

export type FetchCampersParams = {
  page: number;
  perPage: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
};

export const fetchCampers = async (params: FetchCampersParams) => {
  const response = await api.get<CampersResponse>('/campers', { params });
  return response.data;
};

export const getCamperById = async (camperId: string) => {
  const response = await api.get<CamperDetails>(`/campers/${camperId}`);
  return response.data;
};

export const fetchFilter = async () => {
  const response = await api.get<FilterOptions>('/campers/filters');
  return response.data;
};

export const getCamperReviews = async (camperId: string) => {
  const response = await api.get<Review[]>(`/campers/${camperId}/reviews`);
  return response.data;
};

export type BookingRequest = {
  name: string;
  email: string;
};

export type BookingResponse = {
  message: string;
};

export const createBookingRequest = async (
  camperId: string,
  data: BookingRequest
) => {
  const response = await api.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    data
  );
  return response.data;
};
