

export const getCountries = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    const resp = await fetch(url); 
    const  data  = await resp.json(); 

    const countries = data.map((country) => ({
        id: country.name.common,
        name: country.name.common, 
        img: country.flags.png, 
        population: country.population,
        region: country.region,
        capital: country.capital, 
    })); 

    return countries
}