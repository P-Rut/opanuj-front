import { useState, useEffect } from 'react';

function useValidateGuess(
  getNewGuess,
  randomCountry,
  playerValue,
  setPlayerValue
) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const validateAnswer = (e) => {
    e.preventDefault();

    if (playerValue.toLowerCase() === randomCountry.toLowerCase()) {
      setPlayerValue('');
      getNewGuess();
      setIsCorrect(true);
    } else {
      setIsWrong(true);
      setTimeout(() => {
        setIsWrong(false);
      }, 600);
    }
  };

  useEffect(() => {
    if (isCorrect) {
      setTimeout(() => {
        setIsCorrect(false);
      }, 3000);
    }
  }, [isCorrect]);

  return {
    isCorrect,
    isWrong,
    validateAnswer,
  };
}

export default useValidateGuess;
