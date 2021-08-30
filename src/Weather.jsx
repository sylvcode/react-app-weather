import React, { useState } from 'react'
import './Weather.css'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'
import WeatherForecast from './WeatherForecast'
import './Weatherform.css'

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultCity)

  function handleResponse(response) {
    console.log(response)
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()

    // searh for a city make an api call
  }

  function handleCityChange(event) {
    setCity(event.target.value)
    //when someone types a city
  }

  function search() {
    const apiKey = '5f472b7acba333cd8a035ea85a0d4d4c'

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-7 col-xl-5">
            <div className="wrapper">
              <form onSubmit={handleSubmit} id="search-form">
                <div className="row">
                  <div className="col-10">
                    <input
                      type="search"
                      placeholder="Enter a city.."
                      className="form-control"
                      id="city-input"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="submit"
                      value="search"
                      className="btn btn-outline-success customised"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="card mb-4 bradius">
              <div className="card-body p-4">
                <div id="demo1" className="carousel slide" data-ride="carousel">
                  <ul className="carousel-indicators mb-0">
                    <li
                      data-target="#demo1"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#demo1" data-slide-to="1"></li>
                    <li data-target="#demo1" data-slide-to="2"></li>
                  </ul>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-between mb-4 pb-2">
                        <div>
                          <WeatherInfo data={weatherData} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    )
  } else {
    search()
    return 'Loading...'
  }
}
