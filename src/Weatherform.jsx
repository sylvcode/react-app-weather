import React from 'react'
import './Weatherform.css'

export default function Weatherform() {
  return (
    <div className="wrapper">
      <form id="search-form">
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              id="city-input"
            />
          </div>
          <div class="col-2">
            <input
              type="submit"
              value="search"
              className="btn btn-outline-success customised"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
