import { createContext, useState } from "react";
import { getAllCountries } from "../helpers";

const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([])

const getCountries = async () => {
    const countriesFromAPI = await getAllCountries(); 
    setCountries(countriesFromAPI); 
}
  return (
    <CountriesContext.Provider value={{ countries, getCountries}}>
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesContext, CountriesProvider};
