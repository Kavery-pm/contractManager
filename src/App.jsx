import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import SideNavigation from './layouts/sideBar';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main:   '#20caa4'  , 
      },
      secondary: {
        main:  '#157f8a'  , 
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif", 
    },
    spacing: 4, 
  });

  return (
    <ThemeProvider theme={theme}>
   <SideNavigation />
    </ThemeProvider> 
    
  )
}

export default App
