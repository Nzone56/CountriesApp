export const getCountriesByQuery = (query, region, countries) => {
  return countries.filter((country) => { 
    return region === "All"
      ? country.name.toLowerCase().includes(query.toLowerCase())
      : country.name.toLowerCase().includes(query.toLowerCase()) &&
          country.region === region;
  });
};
