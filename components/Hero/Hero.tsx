import Link from 'next/link';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className="container ">
        <h2 className={css.heroTitle}>Campers of your dreams</h2>
        <p className={css.heroText}>
          You can find everything you want in our catalog
        </p>
        <Link
          className={css.heroButton}
          href="/catalog"
          aria-label="Перейти до каталогу"
        >
          View Now
        </Link>
      </div>
    </section>
  );
}
