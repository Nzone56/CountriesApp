import { useContext } from 'react';
import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { ThemeContext } from '../context/ThemeProvider';
import '../styles/App.scss'

export const CountriesPage = () => {

  const { theme } = useContext(ThemeContext); 

  return (
    <>
      <div className={`App ${theme}`}>
        <Navbar />
        <h1>CountriesPage</h1>
      </div>
    </>
  )
}
