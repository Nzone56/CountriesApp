export const getCountryById = async ( name ) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const resp = await fetch(url);
  const country = await resp.json();
   
  
  const countries =  {
    id: country[0].name.common,
    name: country[0].name.common,
    img: country[0].flags.png,
    nativeName: country[0].name.nativeName,
    population: country[0].population,
    region: country[0].region,
    subRegion: country[0].subregion,
    capital: country[0].capital,
    topLevelDomain: country[0].tld,
    currencies: country[0].currencies,
    languages: country[0].languages,
    borderCountries: country[0].borders
  };
  console.log(countries);
  return countries;
};
