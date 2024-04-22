import {BrowserRouter, Route, Routes} from 'react-router-dom'

// COMPONENTS
import NavbarComponent from './components/Navbar.component';

// PAGES 
import PrincipalPage from './pages/PrincipalPage'; 

function App() {
  const deuda = false;
  return (
    <BrowserRouter>
      {deuda ? <></> : <NavbarComponent/>}
      <Routes>
        <Route path = {process.env.PUBLIC_URL} element = {deuda ? <h1 style={{"text-transform":"uppercase","display":"flex","justifyContent":"center","margin-top":"20%"}}>En construcción ...</h1> : <PrincipalPage />} />
        {/* <Route path = '*' element = {<ErrorPage/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//{process.env.PUBLIC_URL}

