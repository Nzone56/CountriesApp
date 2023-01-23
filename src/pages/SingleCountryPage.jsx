import { useContext, useEffect, useMemo, useState } from "react"
import { FaArrowAltCircleRight, FaArrowLeft } from "react-icons/fa";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components"
import { ThemeContext } from "../context/ThemeProvider"
import { getCountryById } from "../helpers";
import "../styles/App.scss";
export const SingleCountryPage = (  ) => {
   
  const { theme } = useContext(ThemeContext)
  const { id } = useParams(); 
  const [country, setCountry] = useState("")
  
  const getCountry = async () => {
    setCountry( await getCountryById( id)); 
  }
  
  useEffect(() => {
    getCountry(); 
  }, [])
  
  const { img, name, nativeName, population, region, subRegion, capital, topLevelDomain, currencies, languages, borderCountries} = country; 
  const navigate = useNavigate();
  console.log(country);
  const onNavigateBack = () => {
      navigate(-1); 
  }

  return (
    <>
      <div className={`App-${theme}`}>
        <Navbar />
        <div className={`main-${theme}`}>
          <div className={`main-${theme}-button`}>
            <FaArrowLeft />
            <button onClick={onNavigateBack}> Back </button>
          </div>
          <div className={`main-${theme}__singleInfo`}>
            <div className={`main-${theme}__singleInfo__img`}>
              <img src={img} alt={name} />
            </div>
            <div className={`main-${theme}__singleInfo__description`}>
              <p className={`card-${theme}__singleInfo__title`}> {name} </p>
              <div className={`card-${theme}__singleInfo__Info`}>
                <div className={`card-${theme}__singleInfo__Info__item`}>
                  <span> Native Name: </span>
                  {nativeName.map((language) => {
                    return <a> {language}</a>;
                  })}
                </div>
                <div className={`card-${theme}__singleInfo__Info__item`}>
                  <span> Population: </span> <a> {population}</a>
                </div>
                <div className={`card-${theme}__singleInfo__Info__item`}>
                  <span> Region: </span> <a> {region}</a>
                </div>
                <div className={`card-${theme}__singleInfo__Info__item`}>
                  <span> Sub Region: </span> <a> {subRegion}</a>
                </div>
                <div className={`card-${theme}__singleInfo__Info__item`}>
                  <span> Capital: </span> <a> {capital[0]}</a>
                </div>
                <div className={`card-${theme}__singleInfo__Info__item`}>
                  <span> Top Level Domain: </span> <a> {topLevelDomain[0]}</a>
                </div>
                <div className={`card-${theme}__singleInfo__Info__item`}>
                  <span> Currencies: </span> <a> {currencies.USD.name}</a>
                </div>
                <div className={`card-${theme}__singleInfo__Info__item`}>
                  <span> Languages: </span>
                  {languages.map((language) => {
                    return <a> {language}</a>;
                  })}
                </div>
                
                <div className={`card-${theme}__singleInfo__Info__borders`}>
                  <span> Border Countries: </span>
                  {borderCountries.map((country) => {
                    return <button> {country}</button>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
