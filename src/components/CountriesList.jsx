import { useEffect, useState } from "react";
import { CountryCard } from "./CountryCard"
import { getCountries, getCountriesByQuery, getCountriesByRegion } from "../helpers"
export const CountriesList = (  { value }   ) => {

  const [countriesDB, setCountriesDB] = useState([]);
  const [countries, setCountries] = useState(countriesDB)
  const getAllCountries = async () => {
    setCountriesDB(await getCountries());
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    setCountries(getCountriesByQuery( value.query, countriesDB)); 
  }, [ value.query ])

   useEffect(() => {
     setCountries(getCountriesByRegion(value.region, countriesDB));
   }, [value.region]);


  return (
    <div className="cardsList">
      {
        countries.map( country => {
            return <CountryCard key={ country.name} { ...country } />
        })
      }
    </div>
  )
}
