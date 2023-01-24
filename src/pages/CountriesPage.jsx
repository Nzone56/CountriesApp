import { useContext, useRef, useState } from 'react';
import { Navbar } from '../components/Navbar'
import { ThemeContext } from '../context/ThemeProvider';
import '../styles/App.scss'
import { CountriesList } from '../components';
import { CountriesContext } from '../context/CountriesProvider';

export const CountriesPage = () => {


  //TODO: input component 
  // 1. update countries from parent 
  // 2. send function to child ( input ) with his own state with the input value or reference from child 
  // 3. same with regions 

  const { theme } = useContext(ThemeContext); 
  const [query, setQuery] = useState("")
  const [region, setRegion] = useState("")


  const handleInputChange = ( event ) =>{
    setQuery(event.target.value); 
  }

  const handleSelectChange = ( event ) => {
    setRegion(event.target.value); 
  }

  return (
    <>
      <div className={`App-${theme}`}>
        <Navbar />
        <div className={`main-${theme}`}>
          <div className={`main-${theme}__search`}>
            {/* <FaSearch /> */}

            <input
              onChange={handleInputChange}
              className={`main-${theme}__input`}
              type="text"
              placeholder="Search for a country..."
            />

            <select
              name="select"
              className={`main-${theme}__select`}
              onChange={handleSelectChange}
            >
              <option value="Filter by Region" disabled hidden>
                Filter by Region
              </option>
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
    </>
  );
}
