import { Link } from "react-router";
function CountryCard({ name, population, region, capital, flag }) {
  return (
    <Link to={name}>
      <div className="rounded bg-gray-50 p-3 pb-9 shadow-md dark:bg-gray-800">
        <img
          className="h-40 w-full rounded-md"
          src={flag}
          alt="placeholder"
          loading="lazy"
        />
        <h2 className="my-4 text-lg font-extrabold">{name}</h2>
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">{population}</span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">{region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
