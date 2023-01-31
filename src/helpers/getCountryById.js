import { getCountriesNames } from "./getCountriesNames";

export const getCountryById = async ( name ) => {

  console.log(  name )
  
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const resp = await fetch(url);
  const countryArr = await resp.json();
  const countriesBorder = countryArr[0].borders 
  ?  await getCountriesNames(countryArr[0].borders)
  : ["None"]

  const country = {
    id: countryArr[0].name.common,
    name: countryArr[0].name.common,
    img: countryArr[0].flags.svg,
    nativeName: countryArr[0].name.nativeName,
    population: countryArr[0].population,
    region: countryArr[0].region,
    subRegion: countryArr[0].subregion,
    capital: countryArr[0].capital,
    topLevelDomain: countryArr[0].tld,
    currencies: countryArr[0].currencies,
    languages: countryArr[0].languages,
    borderCountries: countriesBorder,
  };

  console.log(country);
  return country;
};
