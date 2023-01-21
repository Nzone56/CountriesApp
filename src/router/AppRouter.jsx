import { Route, Routes } from "react-router-dom"
import { CountriesPage, SingleCountryPage } from "../pages"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/countries" element={ <CountriesPage />} />
        <Route path="/country" element={ <SingleCountryPage /> } />
    </Routes>
  );
}
