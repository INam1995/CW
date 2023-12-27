import './App.css';
import aboutUs from "./Components/AboutUs/aboutUs"
import contactUs from './Components/ContactUs/contactUs';
import mainPage from './Components/LandingPage/mainPage';
import safetyPage from './Components/SafetyPage/safetyPage';

import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/aboutUs" Component={aboutUs}/>
        <Route path="/contactUs" Component={contactUs}/>
        <Route path="/safetyPage" Component={safetyPage}/>
        <Route path="/" exact Component={mainPage}/>
      </Routes>
    </div>
  );
}

export default App;
