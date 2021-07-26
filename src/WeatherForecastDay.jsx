import React from 'react'
import WeatherIcon from './WeatherIcon'

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.max)
    return `${temperature}°C`
  }

  function minTemperature() {
    let temperature = Math.round(props.data.min)
    return `${temperature}°C`
  }

  function day() {
    let date = new Date(props.data.dt * 1000)
    let day = date.getDay()

    let days = ['Sun', 'Mon', 'Tue']
    return days[day]
  }
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
          <div className="flex-column">
            <i className="fas fa-sun fa-2x mb-3">
              <p className="mb-0">{day()}</p>{' '}
              <WeatherIcon code={props.data.weather[0].icon} size={36} />
            </i>
            <p className="WeatherDailyForecast-temperature-max">
              {maxTemperature()}°C
            </p>{' '}
            <p className="WeatherDailyForecast-temperature-min">
              {minTemperature()}°C
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
  )
}
