import { useContext } from 'react';
import { Navbar } from '../components/Navbar'
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeProvider';
import '../styles/App.scss'
import { CountriesList } from '../components';

export const CountriesPage = () => {

  const { theme } = useContext(ThemeContext); 

  return (
    <>
      <div className={`App-${theme}`}>
        <Navbar />
        <div className={`main-${theme}`}>
          <div className={`main-${theme}__search`}>
            {/* <FaSearch /> */}

            <input
              className={`main-${theme}__input`}
              type="text"
              placeholder="Search for a country..."
            />

            <select name="select" className={`main-${theme}__select`}>
              <option
                value="Filter by Region"
                disabled
                selected
                hidden
              >
                Filter by Region 
              </option>
              <option value="Africa"> Africa </option>
              <option value="America"> America </option>
              <option value="Asia"> Asia</option>
              <option value="Europe"> Europe </option>
              <option value="Oceania"> Oceania </option>
            </select>
          </div>
          <CountriesList />
        </div>
      </div>
    </>
  );
}
