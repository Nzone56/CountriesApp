import { useContext, useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeProvider";
import '../styles/App.scss'

export const Navbar = () => {

  const {toggleTheme, theme } = useContext(ThemeContext); 

  const handleClick = () =>{
    toggleTheme(); 
  }
  
  return (
      <div className="navbarContent">
        <div className="navbarContent__title">
          <h1> Where in the world? </h1>
        </div>
        <div className="navbarContent__darkMode">
          <button 
          onClick={ handleClick }
          >
            <FaMoon /> Dark Mode
          </button>
        </div>
      </div>
  );
};
