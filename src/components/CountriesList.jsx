import { useEffect, useState } from "react";
import { CountryCard } from "./CountryCard"
import { getCountries, getCountriesByQuery, getCountriesByRegion } from "../helpers"
export const CountriesList = (  { value }   ) => {


  //TODO: DELETE 1 STATE ( USE CONTEXT OR USE REF)

  const [countriesDB, setCountriesDB] = useState([]);
  const [countries, setCountries] = useState(countriesDB)
  const getAllCountries = async () => {

    //TODO: idk jdsjds
    const countries = await getCountries();
    setCountriesDB(countries);
    setCountries(await getCountries());
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
