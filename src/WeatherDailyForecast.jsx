import React from 'react'
import WeatherIcon from './WeatherIcon'
import './WeatherDailyForecast.css'

export default function WeatherDailyForecast() {
  return (
    <div className="card bradius">
      <div className="card-body p-4">
        <div id="demo3" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators mb-0">
            <li data-target="#demo2" data-slide-to="0"></li>
            <li data-target="#demo2" data-slide-to="1" className="active"></li>
            <li data-target="#demo2" data-slide-to="2"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                <div className="flex-column">
                  <i className="fas fa-sun fa-2x mb-3">
                    <p className="mb-0">
                      <strong>Mon</strong>
                    </p>{' '}
                    <WeatherIcon code="01d" />
                  </i>
                  <p className="WeatherDailyForecast-temperature-max">21°C</p>{' '}
                  <p className="WeatherDailyForecast-temperature-min"> 21°C</p>
                </div>
                <div className="flex-column">
                  <i className="fas fa-sun fa-2x mb-3">
                    <p className="mb-0">
                      <strong>Tue</strong>
                    </p>{' '}
                    <WeatherIcon code="01d" />
                  </i>
                  <p className="small">
                    <strong>21°C</strong>
                  </p>
                </div>
                <div className="flex-column">
                  <i className="fas fa-sun fa-2x mb-3">
                    <p className="mb-0">
                      <strong>Wed</strong>
                    </p>{' '}
                    <WeatherIcon code="01d" />
                  </i>
                  <p className="small">
                    <strong>21°C</strong>
                  </p>
                </div>
                <div className="flex-column">
                  <i className="fas fa-sun fa-2x mb-3">
                    <p className="mb-0">
                      <strong>Tue</strong>
                    </p>{' '}
                    <WeatherIcon code="01d" />
                  </i>
                  <p className="small">
                    <strong>21°C</strong>
                  </p>
                </div>
                <div className="flex-column">
                  <i className="fas fa-sun fa-2x mb-3">
                    <p className="mb-0">
                      <strong>Fri</strong>
                    </p>{' '}
                    <WeatherIcon code="01d" />
                  </i>
                  <p className="small">
                    <strong>21°C</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
