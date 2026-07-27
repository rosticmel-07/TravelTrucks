import Link from 'next/link';
import css from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.content}>
          <Link
            href="/"
            className={css.headerLogo}
            aria-label="Перейти на головну"
          >
            <Image
              src="/Logo.svg"
              alt="TravelTrucks logo"
              width={136}
              height={16}
              priority
            />
          </Link>

          <ul className={css.nav}>
            <li className={css.navItem}>
              <Link
                href="/"
                className={css.navLink}
                aria-label="Перейти на головну"
              >
                Home
              </Link>
            </li>
            <li className={css.navItem}>
              <Link
                href="/catalog"
                className={css.navLink}
                aria-label="Перейти до каталогу"
              >
                Catalog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
