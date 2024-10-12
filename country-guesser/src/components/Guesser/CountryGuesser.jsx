import CountryInput from '../CountryInput';
import SortInput from '../SortInput';
import CountriesList from '../CountriesList';
import useSort from '../hooks/useSort';
import useSearch from '../hooks/useSearch';
import Title from '../Title';
import Switch from '../Switch';
import Guesser from './Guesser';
import { useState } from 'react';

function CountryGuesser() {
  const [value, setValue] = useState(true);
  const { country, setCountry, data } = useSearch();
  const { sortOptions, setSortOptions, sortedCountries } = useSort(data);

  return (
    <>
      <div className=" bg-slate-100 flex flex-col justify-center content-center w-screen p-10 font-kanit font-light">
        <Title title={'Search or guess 🌏'} />
        <CountryInput value={country} setValue={setCountry} />
        <SortInput value={sortOptions} setValue={setSortOptions} />
        <Switch value={value} setValue={setValue} />
        {value ? (
          <CountriesList sortedCountries={sortedCountries} />
        ) : (
          <Guesser />
        )}
      </div>
    </>
  );
}

export default CountryGuesser;
