import React from 'react'
import GetDate from './GetDate'
import WeatherIcon from './WeatherIcon'
import WeatherTemperature from './WeatherTemperature'
import './WeatherInfo.css'

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="row mx-md-n5">
          <div className="col px-md-5">
            <h4 className="mb-0">{props.data.city}</h4>
            <h3>
              <GetDate date={props.data.date} />
            </h3>
            <p className="text-muted mb-0 text-capitalize">
              {props.data.description}
            </p>
            <p className="text-muted mb-0">Humidity: {props.data.humidity} %</p>
            <p className="text-muted mb-0">Wind: {props.data.wind} km/h</p>
          </div>

          <div className="col px-md-5">
            <WeatherIcon code={props.data.icon} />

            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  )
}
