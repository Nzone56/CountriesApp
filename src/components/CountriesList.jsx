import { useEffect, useState } from "react";
import { CountryCard } from "./CountryCard"
import { getCountries } from "../helpers/getCountries"
export const CountriesList = () => {

  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    setCountries(await getCountries());
  };
  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="cardsList">
      {
        countries.map( country => {
            return <CountryCard { ...country } />
        })
      }
    </div>
  )
}
