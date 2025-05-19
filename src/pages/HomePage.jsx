import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import SearchBar from "../components/SearchBar";
import ShowMessage from "../components/ShowMessage";
import { UseFetchData } from "../../UseFetchData";
function HomePage() {
  const {
    isLoading,
    isError,
    result,
    filteredCountries,
    setFilteredCountries,
  } = UseFetchData();
  return (
    <>
      {isLoading && <ShowMessage message={"Loading Data..."} />}
      {isError && <ShowMessage message={"Something went wrong"} />}
      {!isLoading && (
        !isError && <>
          <div>
            <div className="container mx-auto flex flex-col items-start justify-between gap-5 px-4 md:flex-row">
              <SearchBar
                countryList={result}
                filteredCountries={setFilteredCountries}
              />
              <RegionMenu
                countryList={result}
                filteredCountries={setFilteredCountries}
              />
            </div>
          </div>
          <CountryList data={filteredCountries} />
        </>
      )}
    </>
  );
}

export default HomePage;
