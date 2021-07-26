import React, { useState } from 'react'

import './WeatherForecast.css'
import axios from 'axios'
import WeatherForecastDay from './WeatherForecastDay'

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false)
  let [forecast, setForecast] = useState(null)

  function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true)
  }

  if (loaded) {
    return (
      <div className="card bradius">
        <div className="card-body p-4">
          <div id="demo3" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators mb-0">
              <li data-target="#demo2" data-slide-to="0"></li>
              <li
                data-target="#demo2"
                data-slide-to="1"
                className="active"
              ></li>
              <li data-target="#demo2" data-slide-to="2"></li>
            </ul>
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div classNamek="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  } else {
    let apiKey = '5f472b7acba333cd8a035ea85a0d4d4c'
    let longitude = props.coordinates.lon
    let latitude = props.coordinates.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)

    return null
  }
}
