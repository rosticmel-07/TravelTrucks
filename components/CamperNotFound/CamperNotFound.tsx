import Image from 'next/image';
import { MdOutlineClose } from 'react-icons/md';
import css from './CamperNotFound.module.css';

type CamperNotFoundProps = {
  onClearFilters: () => void;
};

export default function CamperNotFound({
  onClearFilters,
}: CamperNotFoundProps) {
  return (
    <div className={css.wrapper}>
      <Image
        src="/NotFound.png"
        alt="No campers found"
        width={488}
        height={463}
        className={css.image}
      />

      <h2 className={css.title}>No campers found</h2>
      <p className={css.description}>
        We couldnt find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={css.actions}>
        <button
          type="button"
          className={css.clearButton}
          onClick={onClearFilters}
        >
          <MdOutlineClose /> Clear filters
        </button>
        <button
          type="button"
          className={css.viewAllButton}
          onClick={onClearFilters}
        >
          View all campers
        </button>
      </div>
    </div>
  );
}
