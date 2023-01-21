import { ThemeProvider } from './context/ThemeProvider';
import { AppRouter } from './router/AppRouter'
import './styles/App.scss'


export function CountryApp() {

  return (
    <ThemeProvider>
        <AppRouter />
    </ThemeProvider>
  );
}


