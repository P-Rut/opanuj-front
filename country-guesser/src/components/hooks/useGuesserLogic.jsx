import { useEffect, useState } from 'react';
import useSearch from '../hooks/useSearch';
function useGuesserLogic() {
  const { data } = useSearch();
  const [randomCountryImg, setRandomCountryImg] = useState();
  const [randomCountry, setRandomCountry] = useState('');
  useEffect(() => {
    if (data.length > 0) {
      const randomCountryIndex = Math.floor(Math.random() * data.length);
      setRandomCountry(data[randomCountryIndex].name.common);
      setRandomCountryImg(data[randomCountryIndex].flags.png);
    }
  }, [data]);

  const getNewGuess = () => {
    if (data.length > 0) {
      const randomCountryIndex = Math.floor(Math.random() * data.length);
      setRandomCountry(data[randomCountryIndex].name.common);
      setRandomCountryImg(data[randomCountryIndex].flags.png);
    }
  };

  return {
    getNewGuess,
    randomCountry,
    randomCountryImg,
    setRandomCountry,
    setRandomCountryImg,
  };
}

export default useGuesserLogic;
