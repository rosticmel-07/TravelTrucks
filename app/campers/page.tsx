import CamperList from '@/components/CamperList/CamperList';
import Filters from '@/components/Filters/Filters';
import { fetchCampers } from '@/lib/api';
import css from './page.module.css';

export default async function CampersPage() {
  const { campers } = await fetchCampers();

  return (
    <section className={css.page}>
      <div className={css.container}>
        <Filters />
        <CamperList campers={campers} />
      </div>
    </section>
  );
}
