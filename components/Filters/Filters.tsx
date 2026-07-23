import { fetchFilter } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

type CampersFilters = {
  location: string;
  form: string | null;
  transmission: string | null;
  engine: string | null;
};

export default function Filters() {
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

  return (
    <section>
      <div>
        <form action="">
          <div>
            <p>Location</p>
            <input
              type="text"
              value={filterCampers.location}
              onChange={(event) =>
                setFilterCampers({
                  ...filterCampers,
                  location: event.target.value,
                })
              }
              name="Location"
            />
          </div>

          <div>
            <p>Filters</p>
            <div>
              <div>
                <p>Camper Form</p>
                <label htmlFor="">
                  <input
                    type="radio"
                    value={'alcove'}
                    name="camperForm"
                    checked={data.forms === 'alcove'}
                  ></input>
                  Alcove
                </label>
                <label htmlFor="">
                  <input
                    type="radio"
                    value={'panel_van'}
                    name="camperForm"
                    checked={filterCampers.form === 'panel_van'}
                  ></input>
                  Panel Van
                </label>
                <label htmlFor="">
                  <input
                    type="radio"
                    value={'integrated'}
                    name="camperForm"
                    checked={filterCampers.form === 'integrated'}
                  ></input>
                  Integrated
                </label>
                <label htmlFor="">
                  <input
                    type="radio"
                    value={'semi_integrated'}
                    name="camperForm"
                    checked={filterCampers.form === 'semi_integrated'}
                  ></input>
                  Semi Integrated
                </label>
              </div>
              <div>
                <p>Engine</p>
                <label htmlFor="">
                  <input type="radio" value={'diesel'} name="Engine"></input>
                  Diesel
                </label>
                <label htmlFor="">
                  <input type="radio" value={'petrol'} name="Engine"></input>
                  Petrol
                </label>
                <label htmlFor="">
                  <input type="radio" value={'hybrid'} name="Engine"></input>
                  Hybrid
                </label>
                <label htmlFor="">
                  <input type="radio" value={'electric'} name="Engine"></input>
                  Electric
                </label>
              </div>
              <div>
                <p>Transmission</p>
                <label htmlFor="">
                  <input type="radio" value={'automatic'} name="Transmission" />
                  Automatic
                </label>

                <label htmlFor="">
                  <input type="radio" value={'manual'} name="Transmission" />
                  Manual
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
