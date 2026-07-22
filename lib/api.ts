import { Camper, CamperDetails, CampersResponse } from '@/type/Trucks';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://campers-api.goit.study',
});

export const fetchCampers = async () => {
  const response = await api.get<CampersResponse>('/campers');
  return response.data;
};

export const getCamperById = async (truckId: string) => {
  const response = await api.get<CamperDetails>(`/campers/${truckId}`);
  return response.data;
};
