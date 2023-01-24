import { useContext, useEffect, useMemo, useState } from "react"
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components"
import { ThemeContext } from "../context/ThemeProvider"
import { getCountryByCode, getCountryById } from "../helpers";
import { getCountriesNames } from "../helpers/getCountriesNames";
import "../styles/App.scss";

export const SingleCountryPage = (  ) => {

  //TODO: Loading;  RESEARCH : skeletons :D uwu
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); 


  const {
    img,
    name,
    nativeName,
    population,
    region,
    subRegion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borderCountries,
  } = country;

  // const [countriesB, setCountriesB] = useState(borderCountries)

  // const getBorderCountries = async () => {
  //   if( borderCountries)
  //   {
  //     setCountriesB( await getCountriesNames( Object.values(borderCountries).map((country) => country)));
  //   }
  // }

  //  useEffect(() => {
  //    getBorderCountries();
  //  }, [borderCountries]);

  const getCountry = async () => {
    // setCountry(await getCountryById(id));
  };

  const onNavigateBack = () => {
    console.log("uwu")
    navigate(-1);
  };

  const onClickBorder = async( code ) => {
    const name = await getBorderName( code ); 
    console.log(location); 
    navigate(`/countries/${ name }`, { replace: true});
  };
 
  const getBorderName = async ( code ) => {
    return await getCountryByCode( code )
  }
  useEffect(() => {
    getCountry();
  }, []);

  useEffect(() => {
    //TODO: Update the state 
    console.log("agzel");
  }, [location.pathname]);
  
  return (
    <>
      <div className={`App-${theme}`}>
        <Navbar />
        <div className={`main-${theme}`}>
          <div className={`main-${theme}__back`}>
            <div
              onClick={onNavigateBack}
              className={`main-${theme}__back__button`}
            >
              <FaArrowLeft />
              <a> Back </a>
            </div>
          </div>
          <div className={`main-${theme}__singleInfo`}>
            <div className={`main-${theme}__singleInfo__img`}>
              <img src={img} alt={name} />
            </div>
            <div className={`main-${theme}__singleInfo__description`}>
              <h1 className={`main-${theme}__singleInfo__title`}> {name} </h1>
              <div className={`main-${theme}__singleInfo__Info`}>
                <div className={`main-${theme}__singleInfo__Info__item`}>
                  <span> Native Name: </span>
                  {nativeName ? (
                    Object.values(nativeName).map((language) => {
                      return <a key={language.official}> {language.common}</a>;
                    })
                  ) : (
                    <a> Loading </a>
                  )}
                </div>
                <div className={`main-${theme}__singleInfo__Info__item`}>
                  <span> Population: </span> <a> {population}</a>
                </div>
                <div className={`main-${theme}__singleInfo__Info__item`}>
                  <span> Region: </span> <a> {region}</a>
                </div>
                <div className={`main-${theme}__singleInfo__Info__item`}>
                  <span> Sub Region: </span> <a> {subRegion}</a>
                </div>
                <div className={`main-${theme}__singleInfo__Info__item`}>
                  <span> Capital: </span> <a> {capital}</a>
                </div>
                <div className={`main-${theme}__singleInfo__Info__item`}>
                  <span> Top Level Domain: </span> <a> {topLevelDomain}</a>
                </div>
                <div className={`main-${theme}__singleInfo__Info__item`}>
                  <span> Currencies: </span>{" "}
                  {currencies ? (
                    Object.values(currencies).map((curr) => {
                      return <a key={curr.symbol}> {curr.name}</a>;
                    })
                  ) : (
                    <a> Loading uwu </a>
                  )}
                </div>
                <div className={`main-${theme}__singleInfo__Info__item`}>
                  <span> Languages: </span>
                  {languages ? (
                    Object.values(languages).map((language) => {
                      return <a key={language}> {language}, </a>;
                    })
                  ) : (
                    <a> Loading uwu </a>
                  )}
                </div>

                <div className={`main-${theme}__singleInfo__borders`}>
                  <span> Border Countries: </span>
                  {borderCountries ? (
                    Object.values(borderCountries).map((country) => {
                      return (
                        <a key={country} onClick={ () => onClickBorder( country ) }>
                          {country}
                        </a>
                      );
                    })
                  ) : (
                    <a> Loading </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
