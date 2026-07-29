import CamperInfo from '@/components/CamperDetails/CamperInfo';
import Reviews from '@/components/Reviews/Reviews';
import BookingForm from '@/components/Form/Form';
import NoCamperFound from '@/components/NoCamperFound/NoCamperFound';
import { getCamperById, getCamperReviews } from '@/lib/api';
import css from './CamperPage.module.css';

type CamperPageProps = { params: Promise<{ camperId: string }> };

export default async function CamperPage({ params }: CamperPageProps) {
  const { camperId } = await params;
  let camperDetail;
  let reviews;

  try {
    [camperDetail, reviews] = await Promise.all([
      getCamperById(camperId),
      getCamperReviews(camperId),
    ]);
  } catch {
    return <NoCamperFound />;
  }

  return (
    <section className={css.page}>
      <div className={css.container}>
        <CamperInfo camper={camperDetail} />

        <div className={css.bottom}>
          <Reviews reviews={reviews} />
          <BookingForm camperId={camperId} />
        </div>
      </div>
    </section>
  );
}
