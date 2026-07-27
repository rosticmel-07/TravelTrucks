import { Camper } from '@/type/Trucks';
import CamperCard from '@/components/CamperCard/CamperCard';
import css from './CamperList.module.css';

type CamperListProps = {
  campers: Camper[];
};

export default function CamperList({ campers }: CamperListProps) {
  return (
    <section className={css.wrapper}>
      <ul className={css.list}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>
    </section>
  );
}
