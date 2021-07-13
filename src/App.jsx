import React from "react";
import './App.css';
import Weather from "./Weather";
import Weatherform from "./Weatherform";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weatherform />
      <Weather />
      <div className="container">
        <footer>
          Coded by Sylvia
  <a href="
  https://github.com/sylviaantons/react-app-weather"
          >
            open sourced on Github
  </a>
        </footer>
      </div>
    </div>
  );
}