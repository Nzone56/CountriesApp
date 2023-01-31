import { getCountryByCode } from "./getCountryByCode"

export const getCountriesNames = async ( countries ) => {

    const borderCountries = await Promise.all(countries.map((country) => getName(country)));
    return borderCountries; 
}

const getName = async ( abr ) => {
    const country = await getCountryByCode(abr); 
    return country.name.common; 
}