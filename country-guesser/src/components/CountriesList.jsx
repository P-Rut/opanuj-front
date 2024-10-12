/* eslint-disable react/prop-types */

function CountriesList({ sortedCountries }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 w-full">
      {sortedCountries.map((country, index) => {
        return (
          <div
            className=" bg-slate-200 p-5 rounded-sm gap-5 flex flex-col justify-center content-center"
            key={index}
          >
            <img src={country.flags.svg} />
            <div className="flex justify-center content-center flex-col">
              <h1>
                <span className=" text-slate-500">Name: </span>
                {country.name.common}
              </h1>
              <h1>
                <span className=" text-slate-500">Capital: </span>
                {country.capital}
              </h1>
              <h1>
                <span className=" text-slate-500">Population: </span>
                {country.population}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
