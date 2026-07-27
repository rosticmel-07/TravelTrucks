'use client';

import { fetchFilter } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import formatLabel from '../_utils/formatLabel';
import css from './Filters.module.css';
import { CiMap } from 'react-icons/ci';

type CampersFilters = {
  location: string;
  form: string | null;
  transmission: string | null;
  engine: string | null;
};

type FiltersProps = {
  onSearch: (filters: CampersFilters) => void;
};

export default function Filters({ onSearch }: FiltersProps) {
  const [filterCampers, setFilterCampers] = useState<CampersFilters>({
    location: '',
    form: null,
    transmission: null,
    engine: null,
  });

  const { data } = useQuery({
    queryKey: ['filterCampers'],
    queryFn: fetchFilter,
  });

  const handleClear = () => {
    const cleared: CampersFilters = {
      location: '',
      form: null,
      engine: null,
      transmission: null,
    };
    setFilterCampers(cleared);
    onSearch(cleared);
  };

  return (
    <section className={css.wrapper}>
      <div className={css.card}>
        <form className={css.form}>
          <div className={css.locationField}>
            <p className={css.locationLabel}>Location</p>
            <div className={css.locationWrapper}>
              <CiMap size={20} className={css.mapIcon} />
              <input
                type="text"
                className={css.locationInput}
                value={filterCampers.location}
                onChange={(event) =>
                  setFilterCampers({
                    ...filterCampers,
                    location: event.target.value,
                  })
                }
                name="location"
                placeholder="City"
              />
            </div>
          </div>

          <h2 className={css.filtersTitle}>Filters</h2>

          <div className={css.groups}>
            <div className={css.group}>
              <p className={css.groupTitle}>Camper form</p>
              <div className={css.options}>
                {data?.forms.map((formsType) => (
                  <label className={css.radioLabel} key={formsType}>
                    <input
                      type="radio"
                      className={css.radioInput}
                      name="form"
                      value={formsType}
                      checked={filterCampers.form === formsType}
                      onChange={() =>
                        setFilterCampers({ ...filterCampers, form: formsType })
                      }
                    />
                    {formatLabel(formsType)}
                  </label>
                ))}
              </div>
            </div>

            <div className={css.group}>
              <p className={css.groupTitle}>Engine</p>
              <div className={css.options}>
                {data?.engines.map((engineType) => (
                  <label className={css.radioLabel} key={engineType}>
                    <input
                      type="radio"
                      className={css.radioInput}
                      name="engine"
                      value={engineType}
                      checked={filterCampers.engine === engineType}
                      onChange={() =>
                        setFilterCampers({
                          ...filterCampers,
                          engine: engineType,
                        })
                      }
                    />
                    {formatLabel(engineType)}
                  </label>
                ))}
              </div>
            </div>

            <div className={css.group}>
              <p className={css.groupTitle}>Transmission</p>
              <div className={css.options}>
                {data?.transmissions.map((transmissionType) => (
                  <label className={css.radioLabel} key={transmissionType}>
                    <input
                      type="radio"
                      className={css.radioInput}
                      name="transmission"
                      value={transmissionType}
                      checked={filterCampers.transmission === transmissionType}
                      onChange={() =>
                        setFilterCampers({
                          ...filterCampers,
                          transmission: transmissionType,
                        })
                      }
                    />
                    {formatLabel(transmissionType)}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className={css.searchButton}
            onClick={() => onSearch(filterCampers)}
          >
            Search
          </button>
          <button
            type="button"
            className={css.clearButton}
            onClick={handleClear}
          >
            Clear filters
          </button>
        </form>
      </div>
    </section>
  );
}
