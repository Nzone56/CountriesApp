import { useContext, useState } from 'react';
import { Navbar } from '../components/Navbar'
import { ThemeContext } from '../context/ThemeProvider';
import '../styles/App.scss'
import { CountriesList } from '../components';
import { FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CountriesPage = () => {

  //TODO: input component 
  // 1. update countries from parent 
  // 2. send function to child ( input ) with his own state with the input value or reference from child 
  // 3. same with regions 

  const { theme } = useContext(ThemeContext); 
  const [query, setQuery] = useState("")
  const [region, setRegion] = useState("All")


  const handleInputChange = ( event ) =>{
    setQuery(event.target.value); 
  }

  const handleSelectChange = ( event ) => {
    setRegion(event.target.value); 
  }



  return (
      <div className={`App-${theme}`}>
        <Navbar />
        <div className={`main-${theme}`}>
          <div className={`main-${theme}__search`}>
            <input
              onChange={handleInputChange}
              className={`main-${theme}__input`}
              type="text"
              placeholder="Search for a country..."
              style={{ textIndent: 1.6 + "rem" }}
            />
            <FontAwesomeIcon icon={{FaSearch}} />
            <select
              name="select"
              className={`main-${theme}__select`}
              onChange={handleSelectChange}
            >
              <option value="All"> All </option>
              <option value="Africa"> Africa </option>
              <option value="Americas"> America </option>
              <option value="Asia"> Asia</option>
              <option value="Europe"> Europe </option>
              <option value="Oceania"> Oceania </option>
            </select>
          </div>
          {<CountriesList value={{ query, region }} />}
        </div>
      </div>
  );
}
