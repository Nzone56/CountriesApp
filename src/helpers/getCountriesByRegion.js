export const getCountriesByRegion = (region, countries ) => {
    return countries.filter((country) => {
      return country.region === region;
    })
};
