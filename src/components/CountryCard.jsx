import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import "../styles/Card.scss"
export const CountryCard = () => {

const { theme } = useContext(ThemeContext); 

  return (
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
  );
}
