import { useContext, useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components"
import { ThemeContext } from "../context/ThemeProvider"
import { getCountryById } from "../helpers";
import "../styles/App.scss";

export const SingleCountryPage = (  ) => {
  
  //TODO: Loading;  RESEARCH : skeletons :D uwu
  //TODO: Countries without border countries, example: Marshall Islands  ( Review )
  //TODO: Back button its getting waaay to back and not in the exact previus page
  //TODO: Ireland shortcut via border country its not working ( Bug from API )

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
  //Get country data
  const getCountry = async () => {
    const countryById = await getCountryById(id);
    setCountry(countryById);
  };
  //Button of Navigate Back :D 
  const onNavigateBack = () => {
    navigate(-1);
  };
  //Change country page
  const onClickBorderCountry = async ( name ) => {
    if( name !== "None")
    {navigate(`/countries/${name}`, { replace: true });}
  };
  //Get country data
  useEffect(() => {
    getCountry();
  }, []);

  //Change country page
  useEffect(() => {
    getCountry();
  }, [location.pathname]);
  return (
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
                <div className={"Column1"}>
                  <div className={`main-${theme}__singleInfo__Info__item`}>
                    <span> Native Name: </span>
                    {nativeName ? (
                      Object.values(nativeName).map((language) => {
                        return <a key={language.common}> {language.common}</a>;
                      })
                    ) : (
                      <a> Loading </a>
                    )}
                  </div>
                  <div className={`main-${theme}__singleInfo__Info__item`}>
                    <span> Population: </span>{" "}
                    <a> {population?.toLocaleString("en-US")}</a>
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
                </div>
                <div className={"Column2"}>
                  <div className={`main-${theme}__singleInfo__Info__item`}>
                    <span> Top Level Domain: </span> <a> {topLevelDomain}</a>
                  </div>
                  <div className={`main-${theme}__singleInfo__Info__item`}>
                    <span> Currencies: </span>{" "}
                    {currencies ? (
                      Object.values(currencies).map((curr) => {
                        return <a key={curr.name}> {curr.name}</a>;
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
                </div>
              </div>
              <div className={`main-${theme}__singleInfo__borders`}>
                <span> Border Countries: </span>
                {borderCountries ? (
                  Object.values(borderCountries).map((country) => {
                    return (
                      <a
                        key={country}
                        onClick={() => onClickBorderCountry(country)}
                      >
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
  );
}
