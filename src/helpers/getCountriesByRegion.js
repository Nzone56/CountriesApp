export const getCountriesByRegion = (region, countries ) => {
    return countries.filter((country) => {
          return region === "All" 
          ? country
          : country.region === region;

    })
};
