import React from 'react';
import './App.css';
import FirstComponent from "./components/FirstComponent"
import SecondComponent from "./components/SecondComponent"
import NamedComponent from "./components/NamedComponent"
import Tweet from './components/Tweet';
import Person from "./components/Person";

function App() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <NamedComponent name="amaka" />
      <div className="tweet">
        <Tweet message="hi there" username="@devfunsho" name="Ifeanyi" date="28/11/2020"/>
        <Tweet message="Trump has won elections" username="@devamaka" name="Amaka" date="01/11/2020"/>
        <Tweet message="I am about to go home" username="@eziamaka" name="Ebuka" date="20/12/2020"/>
      </div>
      <div className="person">
        <Person name="Amaka" age="25" />
        <Person name="Ebuka" age="20" />
        <Person name="Neche" age="40" />
      </div>
    </div>
  )  
}

export default App;
