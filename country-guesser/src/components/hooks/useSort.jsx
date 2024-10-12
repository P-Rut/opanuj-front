import { useState } from 'react';

function useSort(countries) {
  const [sortOptions, setSortOptions] = useState('');

  const sortedCountries = [...countries].sort((a, b) => {
    if (sortOptions === 'alfabetical') {
      if (a.capital > b.capital) {
        return 1;
      } else if (a.capital < b.capital) {
        return -1;
      } else {
        return 0;
      }
    } else if (sortOptions === 'population') {
      if (a.population < b.population) {
        return 1;
      } else if (a.population > b.population) {
        return -1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  });

  return { sortOptions, setSortOptions, sortedCountries };
}

export default useSort;
