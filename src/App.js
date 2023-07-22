import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ContactList from './components/Homepage content/ContactList';
import LandingPage from './components/Landing Page/LandingPage';
import Homepage from './Container/HomePage/Homepage';

import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const {user, isAuthenticated, isLoading} = useAuth0();
  return (
    <BrowserRouter>
    <div className='main'>
      <Routes>
        <Route path= "/"
        element= {isAuthenticated ? <Homepage/> : <LandingPage />} />
      </Routes>
      {isLoading && (<h2>Loading...</h2>)}
      {/* <ContactList /> */}
      {/* <Homepage /> */}

    </div>
    </BrowserRouter>
    
   
  );
}

export default App;
