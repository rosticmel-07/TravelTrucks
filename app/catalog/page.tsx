'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import CamperList from '@/components/CamperList/CamperList';
import Filters, { CampersFilters } from '@/components/Filters/Filters';
import Loader from '@/components/Loader/Loader';
import CamperNotFound from '@/components/CamperNotFound/CamperNotFound';
import { fetchCampers } from '@/lib/api';
import css from './page.module.css';

const PER_PAGE = 4;

const EMPTY_FILTERS: CampersFilters = {
  location: '',
  form: null,
  transmission: null,
  engine: null,
};

export default function CampersPage() {
  const [draftFilters, setDraftFilters] =
    useState<CampersFilters>(EMPTY_FILTERS);
  const [activeFilters, setActiveFilters] =
    useState<CampersFilters>(EMPTY_FILTERS);

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

  const handleClear = () => {
    setDraftFilters(EMPTY_FILTERS);
    setActiveFilters(EMPTY_FILTERS);
  };

  return (
    <section className={css.page}>
      <div className={css.container}>
        <div className={css.filtersSticky}>
          <Filters
            value={draftFilters}
            onChange={setDraftFilters}
            onSearch={setActiveFilters}
            onClear={handleClear}
          />
        </div>

        <div className={css.results}>
          {isLoading ? (
            <div className={css.overlay}>
              <Loader />
            </div>
          ) : campers.length === 0 ? (
            <CamperNotFound onClearFilters={handleClear} />
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
