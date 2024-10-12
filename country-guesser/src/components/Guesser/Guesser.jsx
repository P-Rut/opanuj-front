import { useState } from 'react';
import useGuesserLogic from '../hooks/useGuesserLogic';
import useValidateGuess from '../hooks/useValidateGuess';
import CountryCard from './CountryCard';

function Guesser() {
  const [playerValue, setPlayerValue] = useState('');
  const { randomCountry, randomCountryImg, getNewGuess } = useGuesserLogic();
  const { isCorrect, isWrong, validateAnswer } = useValidateGuess(
    getNewGuess,
    randomCountry,
    playerValue,
    setPlayerValue
  );

  return (
    <div className="flex justify-between mt-10">
      <CountryCard
        isWrong={isWrong}
        randomCountry={randomCountry}
        randomCountryImg={randomCountryImg}
        validateAnswer={validateAnswer}
        playerValue={playerValue}
        setPlayerValue={setPlayerValue}
        isCorrect={isCorrect}
      />
      <div>
        <button
          onClick={getNewGuess}
          className="rounded-2xl border-2 border-dashed border-blue-800 bg-white px-6 py-3 font-semibold uppercase text-blue-500 transition-all duration-150 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_darkblue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
        >
          New guess
        </button>
      </div>
    </div>
  );
}

export default Guesser;
