import { useContext} from "react";
import { ThemeContext } from "../context/ThemeProvider";
import "../styles/Card.scss"
export const CountryCard = ({ id, name, img, population, region, capital  }) => {

const { theme } = useContext(ThemeContext); 

  console.log(img )
  return (
    <>
      <div className={`card-${theme}`}>
        <div className={`card-${theme}__image`}>
          <img src={img} alt={id} />
        </div>
        <div className={`card-${theme}__text`}>
          <p className={`card-${theme}__text__title`}> {name} </p>
          <div className={`card-${theme}__text__description`}>
            <div className={`card-${theme}__text__description__item`}>
              <span> Population: </span> <a> { population }</a>
            </div>
            <div className={`card-${theme}__text__description__item`}>
              <span> Region: </span> <a> { region }</a>
            </div>
            <div className={`card-${theme}__text__description__item`}>
              <span> Capital: </span> <a> { capital }</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
