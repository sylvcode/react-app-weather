import React, { useState } from 'react'

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState('celsius')
  function showCelsius(event) {
    event.preventDefault()
    setUnit('celsius')
  }

  if (unit === 'celsius') {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          <h3 className="temperature">
            <strong> {Math.round(props.celsius)} °C</strong>
          </h3>
        </span>
      </div>
    )
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    )
  }
}
