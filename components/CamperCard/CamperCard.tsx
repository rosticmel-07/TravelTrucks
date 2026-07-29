import Image from 'next/image';
import Link from 'next/link';
import { Camper } from '@/type/Trucks';
import css from './CamperCard.module.css';
import { FaMapLocationDot } from 'react-icons/fa6';
import { TiStarFullOutline } from 'react-icons/ti';
import { MdLocalGasStation } from 'react-icons/md';
import { TbManualGearbox } from 'react-icons/tb';
import { FaCarAlt } from 'react-icons/fa';
import formatLabel from '../_utils/formatLabel';

type CamperCardProps = {
  camper: Camper;
};

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <li className={css.card}>
      <div className={css.top}>
        <Image
          src={camper.coverImage}
          alt={camper.name}
          width={219}
          height={240}
          className={css.image}
        />

        <div className={css.info}>
          <div className={css.heading}>
            <h2 className={css.camperTitle}>{camper.name}</h2>
            <p className={css.price}>€{camper.price}</p>
          </div>

          <div className={css.details}>
            <span className={css.rating}>
              <TiStarFullOutline /> {camper.rating} ({camper.totalReviews}{' '}
              Reviews)
            </span>
            <span className={css.location}>
              <FaMapLocationDot />
              {camper.location}
            </span>
          </div>

          <p className={css.description}>
            {camper.description.slice(0, 75)}...
          </p>

          <ul className={css.badges}>
            <li className={css.badge}>
              <MdLocalGasStation width={24} />
              {formatLabel(camper.engine)}
            </li>
            <li className={css.badge}>
              <TbManualGearbox />
              {formatLabel(camper.transmission)}
            </li>
            <li className={css.badge}>
              <FaCarAlt />
              {formatLabel(camper.form)}
            </li>
          </ul>

          <Link
            href={`/catalog/${camper.id}`}
            className={css.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Show more
          </Link>
        </div>
      </div>
    </li>
  );
}
