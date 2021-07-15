import React, { useState } from 'react'
import './Weather.css'
import axios from 'axios'
import GetDate from './GetDate'

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })
  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
    })
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-7 col-xl-5">
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
                          <GetDate date={weatherData.date} />
                          <h4 className="text-muted mb-0">
                            {weatherData.city}
                          </h4>
                          <p className="text-muted mb-0">
                            {weatherData.description}
                          </p>
                          <p className="text-muted mb-0">
                            Humidity: {weatherData.humidity} %
                          </p>
                          <p className="text-muted mb-0">
                            Wind: {weatherData.wind} km/h
                          </p>
                        </div>
                        <div>
                          <img
                            src={weatherData.iconUrl}
                            alt={weatherData.description}
                            className="float-right"
                          ></img>
                          <h3 className="temperature">
                            <strong>
                              {' '}
                              {Math.round(weatherData.temperature)}°C{' '}
                            </strong>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4 bradius">
              <div className="card-body p-4">
                <div id="demo2" className="carousel slide" data-ride="carousel">
                  <ul className="carousel-indicators mb-0">
                    <li data-target="#demo2" data-slide-to="0"></li>
                    <li
                      data-target="#demo2"
                      data-slide-to="1"
                      className="active"
                    ></li>
                    <li data-target="#demo2" data-slide-to="2"></li>
                  </ul>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                        <div className="flex-column">
                          <p className="small">
                            <strong>21°C</strong>
                          </p>
                          <i className="fas fa-sun fa-2x mb-3"></i>
                          <p className="mb-0">
                            <strong>12:00</strong>
                          </p>
                          <p className="mb-0 text-muted">PM</p>
                        </div>
                        <div className="flex-column">
                          <p className="small">
                            <strong>2°C</strong>
                          </p>
                          <i className="fas fa-sun fa-2x mb-3"></i>
                          <p className="mb-0">
                            <strong>1:00</strong>
                          </p>
                          <p className="mb-0 text-muted">PM</p>
                        </div>
                        <div className="flex-column">
                          <p className="small">
                            <strong>20°C</strong>
                          </p>
                          <i className="fas fa-cloud fa-2x mb-3"></i>
                          <p className="mb-0">
                            <strong>2:00</strong>
                          </p>
                          <p className="mb-0 text-muted">PM</p>
                        </div>
                        <div className="flex-column">
                          <p className="small">
                            <strong>19°C</strong>
                          </p>
                          <i className="fas fa-cloud fa-2x mb-3"></i>
                          <p className="mb-0">
                            <strong>3:00</strong>
                          </p>
                          <p className="mb-0 text-muted">PM</p>
                        </div>
                        <div className="flex-column">
                          <p className="small">
                            <strong>18°C</strong>
                          </p>
                          <i className="fas fa-cloud-showers-heavy fa-2x mb-3"></i>
                          <p className="mb-0">
                            <strong>4:00</strong>
                          </p>
                          <p className="mb-0 text-muted">PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                        <div className="flex-column">
                          <p className="small">
                            <strong>21°C</strong>
                          </p>
                          <i className="fas fa-sun fa-2x mb-3"></i>
                          <p className="mb-0">
                            <strong>Mon</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small">
                            <strong>20°C</strong>
                          </p>
                          <i className="fas fa-sun fa-2x mb-3"></i>
                          <p className="mb-0">
                            <strong>Tue</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small">
                            <strong>16°C</strong>
                          </p>
                          <i className="fas fa-cloud fa-2x mb-3"></i>
                          <p className="mb-0">
                            <strong>Wed</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small">
                            <strong>17°C</strong>
                          </p>
                          <i className="fas fa-cloud fa-2x mb-3"></i>
                          <p className="mb-0">
                            <strong>Thu</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small">
                            <strong>18°C</strong>
                          </p>
                          <i className="fas fa-cloud-showers-heavy fa-2x mb-3"></i>
                          <p className="mb-0">
                            <strong>Fri</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    const apiKey = '43700ee73704d4a7a92f7aa11e986149'

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)

    return 'Loading...'
  }
}
