import { getCountryByCode } from "./getCountryByCode"

export const getCountriesNames = async ( countries ) => {
    const borderCountries = await (countries.map( country => ( getName(country ))))
    return borderCountries; 
}

const getName = async ( abr ) => {
    return await getCountryByCode( abr ); 
}