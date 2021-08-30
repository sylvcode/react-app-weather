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
          <h3>
            <a href="https://github.com/sylviaantons/react-app-weather">
              Open-source{' '}
            </a>
            coded with 💜 by Sylvia. Hosted on
            <a href="https://www.netlify.com/"> Netlify</a>
          </h3>
        </footer>
      </div>
    </div>
  )
}
