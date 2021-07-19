import React from 'react'
import GetDate from './GetDate'
import './WeatherInfo.css'
import WeatherIcon from 'WeatherIcon'

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content-between">
            <div>
              <h4 className="text-muted mb-0">{props.data.city}</h4>
              <GetDate date={props.data.date} />
              <p className="text-muted mb-0">{props.data.description}</p>
              <p className="text-muted mb-0">
                Humidity: {props.data.humidity} %
              </p>
              <p className="text-muted mb-0">Wind: {props.data.wind} km/h</p>
            </div>
            <div className="properties">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />

              <h3 className="temperature">
                <strong> {Math.round(props.data.temperature)}°C </strong>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
