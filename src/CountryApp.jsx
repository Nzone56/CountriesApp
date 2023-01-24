import { CountriesProvider } from './context/CountriesProvider';
import { ThemeProvider } from './context/ThemeProvider';
import { AppRouter } from './router/AppRouter'
import './styles/App.scss'


export function CountryApp() {

  return (
    <ThemeProvider>
      <CountriesProvider>
        <AppRouter />
      </CountriesProvider>
    </ThemeProvider>
  );
}


