import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { getCountries } from "../helpers/getCountries";
import "../styles/Card.scss"
export const CountryCard = () => {

const { theme } = useContext(ThemeContext); 

const getAllCountries = async () => {
    console.log(getCountries()); 
} 

  return (
    <>
    { getAllCountries() }
    <div className={`card-${theme}`}>
      <div className={`card-${theme}__image`}>Acá va una imagen uwu</div>

      <div className={`card-${theme}__text`}>
        <span className={`card-${theme}__text__title`}> Title </span>
        <div className={`card-${theme}__text__description`}>
          <span> Population </span>
          <span> Region </span>
          <span> Capital</span>
        </div>
      </div>
    </div>
    </>
    
  );
}
