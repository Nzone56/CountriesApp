export const getCountryById = async ( name ) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const resp = await fetch(url);
  const countryArr = await resp.json();

  // console.log(countryArr);
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
    borderCountries: countryArr[0].borders,
  };

  // console.log(country);
  return country;
};
