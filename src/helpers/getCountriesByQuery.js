export const getCountriesByQuery = (query, countries) => {
  
    return countries.filter((country) => {
      return country.name.toLowerCase().includes(query.toLowerCase());
    })
};
