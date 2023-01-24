export const getCountryByCode = async ( code ) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  const resp = await fetch(url);
  const countryArr = await resp.json();
  

  // TODO: Generalize the function 
  return countryArr[0].name.common;
};
