import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from "react-router-dom";
import { CountryApp } from './CountryApp'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <CountryApp />
      </BrowserRouter>
  </React.StrictMode>
);
