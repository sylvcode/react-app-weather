import React from 'react'

export default function HourlyWeather(props) {
  return (
    <div className="card mb-4 bradius">
      <div className="card-body p-4">
        <div id="demo2" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators mb-0">
            <li data-target="#demo2" data-slide-to="0"></li>
            <li data-target="#demo2" data-slide-to="1" className="active"></li>
            <li data-target="#demo2" data-slide-to="2"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                {props.hourly.map((syl, index) => {
                  if (index > 5) return null
                  return (
                    <div className="flex-column">
                      <p className="small">
                        <strong>{Math.round(syl.temp)}C</strong>
                      </p>
                      <i className="fas fa-sun fa-2x mb-3"></i>
                      <p className="mb-0">
                        <strong>{new Date(syl.dt * 1000).getHours()} </strong>
                      </p>
                      <p className="mb-0 text-muted">PM</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
