/* eslint-disable react/prop-types */
import ConfettiComponent from './Confetti';

function CountryCard({
  isWrong,
  randomCountry,
  randomCountryImg,
  validateAnswer,
  playerValue,
  setPlayerValue,
  isCorrect,
}) {
  return (
    <div className="flex flex-col gap-5 justify-center content-center">
      <img
        className={isWrong ? 'shake' : ''}
        src={randomCountryImg}
        alt={randomCountry}
      />
      <div>
        <form onSubmit={validateAnswer}>
          <input
            value={playerValue}
            type="text"
            onChange={(e) => setPlayerValue(e.target.value)}
          />
          <button className="none" type="submit"></button>
        </form>
        <h1>{randomCountry}</h1>
      </div>
      {isCorrect && <ConfettiComponent />}
    </div>
  );
}

export default CountryCard;
