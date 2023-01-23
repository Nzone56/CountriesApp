import { Navigate, Route, Routes } from "react-router-dom"
import { CountriesPage, SingleCountryPage } from "../pages"


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/countries" element={<CountriesPage />} />
      <Route path="/countries/:id" element={<SingleCountryPage />} />

      <Route path="/" element={<Navigate to="/countries" />} />
    </Routes>
  );
}
