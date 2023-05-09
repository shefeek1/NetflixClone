import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import Banner from "./components/banner/Banner";
import Rowpost from "./components/rowpost/Rowpost";
import {action, orginals, romance } from './url'

function App() {
  return (
    <div className="App">
           <Navbar /> 
           <Banner />
           <Rowpost url={orginals} title='Netflix Orginals'/>
           <Rowpost url={action} title='Action' isSmall/>
           <Rowpost url={romance} title='Romance' isSmall/>
    </div>
  );
}

export default App;
