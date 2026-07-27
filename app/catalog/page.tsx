'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import CamperList from '@/components/CamperList/CamperList';
import Filters from '@/components/Filters/Filters';
import Loader from '@/components/Loader/Loader';
import { fetchCampers } from '@/lib/api';
import css from './page.module.css';

const PER_PAGE = 4;

type ActiveFilters = {
  location: string;
  form: string | null;
  transmission: string | null;
  engine: string | null;
};

export default function CampersPage() {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    location: '',
    form: null,
    transmission: null,
    engine: null,
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['campers', activeFilters],
      queryFn: ({ pageParam }) =>
        fetchCampers({
          page: pageParam,
          perPage: PER_PAGE,
          location: activeFilters.location || undefined,
          form: activeFilters.form || undefined,
          transmission: activeFilters.transmission || undefined,
          engine: activeFilters.engine || undefined,
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <section className={css.page}>
      <div className={css.container}>
        <Filters onSearch={setActiveFilters} />

        <div className={css.results}>
          {isLoading ? (
            <div className={css.overlay}>
              <Loader />
            </div>
          ) : (
            <div className={css.styleButton}>
              <CamperList campers={campers} />
              {hasNextPage && (
                <button
                  type="button"
                  className={css.loadMoreButton}
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                >
                  {isFetchingNextPage ? 'Loading...' : 'Load more'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
