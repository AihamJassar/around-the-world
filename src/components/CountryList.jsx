import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";

function CountryList({ data }) {
  return (
    <div className="container m-auto grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 px-4 py-6">
      {data && data.length ? (
        data.map((country) => (
          <CountryCard
            key={country.name.official}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
          />
        ))
      ) : (
        <EmptySearch />
      )}
    </div>
  );
}

export default CountryList;
