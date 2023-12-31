import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import SideNavigation from './layouts/sideBar';
import {
  Routes,
  Route,
   BrowserRouter,
 } from "react-router-dom";
import ContractTable from './views/contractTable';
import NewContract from './views/newContract';
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
      <Route path="/contracts" element={<ContractTable/>}/> 
     <Route path="/newContract" element={<NewContract/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    </div>
    </ThemeProvider>
    </>
  )
}

export default App
