import { useContext, useEffect, useState } from "react";
import { CountryCard } from "./CountryCard"
import { getCountriesByQuery, getCountriesByRegion } from "../helpers"
import { CountriesContext } from "../context/CountriesProvider";
export const CountriesList = (  { value }   ) => {

  const { countries, getCountries } = useContext(CountriesContext);
  const [ visibleCountries, setVisibleCountries] = useState( countries )

  const getCountriesFromContext = async () => {
    await getCountries(); 
    setVisibleCountries(countries); 
  };

  useEffect(() => {
    getCountriesFromContext(); 

  }, []);
  useEffect(() => {
    console.log("uwu")
    setVisibleCountries(countries); 
  }, [ countries ])
  useEffect(() => {
    setVisibleCountries(getCountriesByQuery( value.query, countries)); 
  }, [ value.query, value.region])

   useEffect(() => {
     setVisibleCountries(getCountriesByRegion(value.region, countries));
   }, [value.region]);


  return (
    <div className="cardsList">
      {
        visibleCountries.map( country => {
            return <CountryCard key={ country.name} { ...country } />
        })
      }
    </div>
  )
}
