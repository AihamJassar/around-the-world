import { useState, useEffect, useCallback } from "react";
export function UseFetchData(country) {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchCountriesData = useCallback(() => {
    setIsLoading(true);
    let url = "https://restcountries.com/v3.1/all";
    if (country) url = `https://restcountries.com/v3.1/name/${country}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) setResult(data[0]);
        else {
          setResult(data);
          setFilteredCountries(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [country]);

  useEffect(() => {
    if (country) {
      fetchCountriesData();
    } else {
      fetchDataFromLocalStorage();
    }
  }, [fetchCountriesData]);

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(data);
      setFilteredCountries(data);
    } else {
      fetchCountriesData();
    }
  };

  return {
    isLoading,
    isError,
    result,
    filteredCountries,
    setFilteredCountries,
  };
}
