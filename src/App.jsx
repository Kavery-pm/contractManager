import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import SideNavigation from './layouts/sideBar';
import {
  Routes,
  Route,
   BrowserRouter,
 } from "react-router-dom";
import ContractTable from './components/contractTable';
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
    <>
    <ThemeProvider theme={theme}>
    <div className="app-container">
     <BrowserRouter>
     <SideNavigation/>
     <div className='content'>
      <Routes>
      <Route path="/" element={<ContractTable/>} />
      <Route path="/contract" element={<ContractTable/>}/> 
     
      </Routes>
      </div>
    </BrowserRouter>
    </div>
    </ThemeProvider>
    </>
  )
}

export default App
