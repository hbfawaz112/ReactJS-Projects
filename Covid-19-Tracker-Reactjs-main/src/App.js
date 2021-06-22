import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import GlobalStats from './Components/GlobalStats'
import Top5_countries from './Components/Top5_countries'
import Countries from './Components/Countries'
import About from './Components/About'
import Country from './Components/Country'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

    <div className="App ">
    <Navbar/>

  <Route exact path="/"><GlobalStats></GlobalStats>
  <br></br>
  <Top5_countries/>
  </Route>

<Route exact path="/countries"><Countries/>
 
  </Route>
  
  
<Route exact path="/about"><About/>
 
 </Route>
 
 <Route exact path="/country/:country" component={Country} />
    </div>
    </Router>
  );
}

export default App;
