'use client';

import { type CamperDetails } from '@/type/Trucks';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaMapLocationDot } from 'react-icons/fa6';
import formatLabel from '../_utils/formatLabel';
import css from './CamperInfo.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/thumbs';

type CamperProps = {
  camper: CamperDetails;
};

export default function CamperInfo({ camper }: CamperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={css.wrapper}>
      <div className={css.gallery}>
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          className={css.mainSwiper}
        >
          {camper.gallery.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                src={image.original}
                alt={camper.name}
                width={638}
                height={505}
                className={css.mainImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          slidesPerView={4}
          spaceBetween={32}
          watchSlidesProgress
          className={css.thumbSwiper}
        >
          {camper.gallery.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                src={image.thumb}
                alt={camper.name}
                width={136}
                height={144}
                className={css.thumbImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={css.info}>
        <div className={css.baseInfo}>
          <h1 className={css.name}>{camper.name}</h1>
          <div className={css.meta}>
            <p className={css.rating}>
              <TiStarFullOutline />
              {camper.rating} ({camper.totalReviews} Reviews)
            </p>
            <p className={css.location}>
              <FaMapLocationDot />
              {camper.location}
            </p>
          </div>
          <p className={css.price}>€{camper.price}</p>
          <p className={css.description}>{camper.description}</p>
        </div>

        <div className={css.details}>
          <h2 className={css.detailsTitle}>Vehicle details</h2>

          <ul className={css.badges}>
            <li className={css.badge}>{formatLabel(camper.transmission)}</li>
            <li className={css.badge}>{formatLabel(camper.engine)}</li>
            {camper.amenities.map((amenity) => (
              <li key={amenity} className={css.badge}>
                {formatLabel(amenity)}
              </li>
            ))}
            <li className={css.badge}>{formatLabel(camper.form)}</li>
          </ul>

          <ul className={css.specsList}>
            <li className={css.specsRow}>
              <p className={css.specsLabel}>Form</p>
              <p className={css.specsValue}>{formatLabel(camper.form)}</p>
            </li>
            <li className={css.specsRow}>
              <p className={css.specsLabel}>Length</p>
              <p className={css.specsValue}>{camper.length}</p>
            </li>
            <li className={css.specsRow}>
              <p className={css.specsLabel}>Width</p>
              <p className={css.specsValue}>{camper.width}</p>
            </li>
            <li className={css.specsRow}>
              <p className={css.specsLabel}>Height</p>
              <p className={css.specsValue}>{camper.height}</p>
            </li>
            <li className={css.specsRow}>
              <p className={css.specsLabel}>Tank</p>
              <p className={css.specsValue}>{camper.tank}</p>
            </li>
            <li className={css.specsRow}>
              <p className={css.specsLabel}>Consumption</p>
              <p className={css.specsValue}>{camper.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
