import {  useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeProvider";
import '../styles/App.scss'

export const Navbar = () => {

  const {toggleTheme, theme } = useContext(ThemeContext); 
  const handleClick = () =>{
    toggleTheme(); 
  }
  
  return (
    <div className={`navbar ${theme}`}>
      <div className="navbar__title">
        <span> Where in the world? </span>
      </div>
      <div className="navbar__darkMode">
        <button className={`navbar__darkMode__${theme}`} onClick={handleClick}>
          <FaMoon />
          <a> Dark Mode  </a>
        </button>
      </div>
    </div>
  );
};
