'use client';

import { fetchFilter } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import formatLabel from '../_utils/formatLabel';
import css from './Filters.module.css';
import { CiMap } from 'react-icons/ci';

export type CampersFilters = {
  location: string;
  form: string | null;
  transmission: string | null;
  engine: string | null;
};

type FiltersProps = {
  value: CampersFilters;
  onChange: (filters: CampersFilters) => void;
  onSearch: (filters: CampersFilters) => void;
  onClear: () => void;
};

export default function Filters({
  value,
  onChange,
  onSearch,
  onClear,
}: FiltersProps) {
  const { data } = useQuery({
    queryKey: ['filterCampers'],
    queryFn: fetchFilter,
  });

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
                value={value.location}
                onChange={(event) =>
                  onChange({ ...value, location: event.target.value })
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
                      checked={value.form === formsType}
                      onChange={() => onChange({ ...value, form: formsType })}
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
                      checked={value.engine === engineType}
                      onChange={() =>
                        onChange({ ...value, engine: engineType })
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
                      checked={value.transmission === transmissionType}
                      onChange={() =>
                        onChange({ ...value, transmission: transmissionType })
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
            onClick={() => onSearch(value)}
          >
            Search
          </button>
          <button type="button" className={css.clearButton} onClick={onClear}>
            Clear filters
          </button>
        </form>
      </div>
    </section>
  );
}
