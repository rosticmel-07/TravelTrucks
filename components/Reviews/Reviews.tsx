import { Review } from '@/type/Trucks';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import css from './Reviews.module.css';

type ReviewsProps = {
  reviews: Review[];
};

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Reviews</h2>
      <ul className={css.list}>
        {reviews.map((review) => (
          <li key={review.id} className={css.card}>
            <div className={css.header}>
              <div className={css.avatar}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className={css.name}>{review.reviewer_name}</p>
                <div className={css.stars}>
                  {Array.from({ length: 5 }).map((_, index) =>
                    index < review.reviewer_rating ? (
                      <TiStarFullOutline
                        key={index}
                        className={css.starFilled}
                      />
                    ) : (
                      <TiStarOutline key={index} className={css.starEmpty} />
                    )
                  )}
                </div>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
