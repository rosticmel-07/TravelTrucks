import CamperCard from '@/components/CamperCard/CamperCard';
import { fetchCampers } from '@/lib/api';
import { Camper, CampersResponse } from '@/type/Trucks';
import CamperList from '@/components/CamperList/CamperList';

export default async function CampersPage() {
  const { campers } = await fetchCampers();
  return <CamperList campers={campers} />;
}
