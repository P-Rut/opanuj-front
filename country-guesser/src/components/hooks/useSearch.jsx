import { useEffect, useState } from 'react';

function useSearch() {
  const [country, setCountry] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    let url;
    if (country.length > 0) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    } else {
      url = `https://restcountries.com/v3.1/all`;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Country not found');
        }
        return response.json();
      })
      .then((data) => {
        setData(data || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setData([]);
      });
  }, [country]);

  return { country, setCountry, data };
}

export default useSearch;
