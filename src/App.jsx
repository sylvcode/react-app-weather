import React from 'react'
import './App.css'
import Weather from './Weather'

export default function App() {
  return (
    <div className="App">
      <h1>Check the weather</h1>

      <Weather defaultCity="Keflavik" />
      <div className="container">
        <footer>
          Coded by Sylvia
          <a
            href="
  https://github.com/sylviaantons/react-app-weather"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  )
}
