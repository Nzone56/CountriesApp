import { useContext, useEffect, useState } from "react";
import { CountryCard } from "./CountryCard"
import { getCountriesByQuery} from "../helpers"
import { CountriesContext } from "../context/CountriesProvider";
export const CountriesList = (  { value }   ) => {

  const { countries, getCountries } = useContext(CountriesContext);
  const [ visibleCountries, setVisibleCountries] = useState( countries )

  const getCountriesFromContext = async () => {
    await getCountries(); 
  };

  useEffect(() => {
    getCountriesFromContext(); 
  }, []);

  useEffect(() => {
    setVisibleCountries(countries); 
  }, [ countries ])

  useEffect(() => {
    setVisibleCountries(getCountriesByQuery( value.query, value.region, countries,)); 
  }, [ value.query, value.region])

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
